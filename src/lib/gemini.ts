/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export class GeminiClient {
  private apiKey: string;
  private baseURL: string = 'https://generativelanguage.googleapis.com/v1beta';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateCompletion(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        `${this.baseURL}/models/gemini-2.0-flash-exp:generateContent`,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': this.apiKey
          }
        }
      );

      return response.data.candidates[0].content.parts[0].text;
    } catch (error: any) {
      console.error('Gemini API error:', error);
      
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your Gemini API key.');
      } else if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else if (error.response?.status === 403) {
        throw new Error('Access forbidden. Check your API key permissions.');
      } else {
        throw new Error(`API Error: ${error.response?.data?.error?.message || 'Failed to generate ASCII tree'}`);
      }
    }
  }
}
