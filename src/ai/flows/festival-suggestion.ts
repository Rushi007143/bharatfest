// This file uses server-side code.
'use server';

/**
 * @fileOverview Provides personalized festival suggestions based on user interests and the current date.
 *
 * - festivalSuggestion - A function that suggests festivals based on user interests and the current date.
 * - FestivalSuggestionInput - The input type for the festivalSuggestion function.
 * - FestivalSuggestionOutput - The return type for the festivalSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FestivalSuggestionInputSchema = z.object({
  interests: z
    .string()
    .describe('The user interests, can be a comma separated list.'),
});
export type FestivalSuggestionInput = z.infer<typeof FestivalSuggestionInputSchema>;

const FestivalSuggestionOutputSchema = z.object({
  festivals: z
    .array(z.string())
    .describe('An array of festivals that the user might be interested in based on their interests and the current date.'),
});
export type FestivalSuggestionOutput = z.infer<typeof FestivalSuggestionOutputSchema>;

export async function festivalSuggestion(input: FestivalSuggestionInput): Promise<FestivalSuggestionOutput> {
  return festivalSuggestionFlow(input);
}

const FestivalSuggestionPromptInputSchema = FestivalSuggestionInputSchema.extend({
  currentDate: z.string().describe('The current date.'),
});

const prompt = ai.definePrompt({
  name: 'festivalSuggestionPrompt',
  input: {schema: FestivalSuggestionPromptInputSchema},
  output: {schema: FestivalSuggestionOutputSchema},
  prompt: `You are a festival expert. Based on the user's interests and the current date, suggest some festivals that the user might be interested in.

User Interests: {{{interests}}}
Current date: {{{currentDate}}}

Suggest festivals:`,
});

const festivalSuggestionFlow = ai.defineFlow(
  {
    name: 'festivalSuggestionFlow',
    inputSchema: FestivalSuggestionInputSchema,
    outputSchema: FestivalSuggestionOutputSchema,
  },
  async input => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const {output} = await prompt({
      ...input,
      currentDate,
    });
    return output!;
  }
);
