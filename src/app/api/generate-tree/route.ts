import { NextRequest, NextResponse } from 'next/server';
import { GeminiClient } from '@/lib/gemini';
import { TreeRequest } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { algorithm }: TreeRequest = await request.json();

    if (!algorithm ) {
      return NextResponse.json(
        { error: 'Algorithm are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const client = new GeminiClient(apiKey);
    
    const prompt = `Create a detailed ASCII-style text flow diagram for ${algorithm}'. Format the output exactly like this structure:

**Output Requirements:**
- Start directly with the code and algorithm flow diagram - no introductory text
- No explanatory sentences before the diagram
- No "Here's the diagram" or similar opening statements
- Begin immediately with the ASCII tree structure

Start with:
- The Actual Code Snippet
- A short description of what the code does
- Initial state showing input and variable initialization
- Use tree-like ASCII characters (├──, │, └──, |, v) to show flow
- Show each loop iteration as a main branch
- Include sub-branches for each operation within iterations

For each iteration, show:
- Current loop variable value and what it represents
- All variable states before and after each operation
- Conditional checks with actual values (e.g., s[0] == s[1] ('b'=='a'))
- Decision outcomes and why they succeed/fail
- Variable updates with old → new values
- Expansion/contraction steps with pointer movements

Include:
- Variable tracking: show all variable values at each step
- Boundary conditions and when loops stop
- Comparison operations with actual character/value comparisons
- Memory updates showing what gets stored where
- Final result with explanation

Format requirements:
- Use ASCII tree structure with proper indentation
- Show actual values in parentheses for all comparisons
- Include 'stop' conditions and why they trigger
- End with final return value and any alternative valid results
- Use clear visual separation between iterations and operations`;

    const asciiTree = await client.generateCompletion(prompt);

    return NextResponse.json({ asciiTree });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to generate ASCII tree visualization' },
      { status: 500 }
    );
  }
}
