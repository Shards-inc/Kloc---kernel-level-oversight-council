import { GoogleGenAI } from "@google/genai";
import { KLOC_SYSTEM_PROMPT } from "../constants";
import { KlocResponse, ProposalData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const runKlocAnalysis = async (proposal: ProposalData): Promise<KlocResponse> => {
  
  const proposalPacket = `
PROPOSAL_PACKET
proposal_id: "${proposal.proposal_id}"
title: "${proposal.title}"
context: "${proposal.context}"
scope: "${proposal.scope}"
assets_at_risk: "${proposal.assets_at_risk}"
execution_boundary: "${proposal.execution_boundary}"
tools_and_integrations: "${proposal.tools_and_integrations}"
data_sources: "${proposal.data_sources}"
success_criteria: "${proposal.success_criteria}"
constraints: "${proposal.constraints}"
unknowns_you_already_know: "${proposal.unknowns_you_already_know}"
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: proposalPacket,
      config: {
        systemInstruction: KLOC_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        temperature: 0.1, // Low temperature for deterministic/analytical output
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini");
    }

    // Parse strictly as JSON
    const data = JSON.parse(text) as KlocResponse;
    return data;
  } catch (error) {
    console.error("KLOC Analysis Error:", error);
    throw error;
  }
};