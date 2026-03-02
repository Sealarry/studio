'use server';
/**
 * @fileOverview A Genkit flow for generating polished, web-ready content for various portfolio sections.
 *
 * - aiPortfolioContentGenerator - A function that handles the content generation process.
 * - AiPortfolioContentGeneratorInput - The input type for the aiPortfolioContentGenerator function.
 * - AiPortfolioContentGeneratorOutput - The return type for the aiPortfolioContentGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPortfolioContentGeneratorInputSchema = z.object({
  aboutMeRaw: z
    .string()
    .describe('Raw text content for the "About Me" and "Goals" section.'),
  educationRaw: z
    .string()
    .describe('Raw text content for the "Education" section.'),
  certificationsRaw: z
    .string()
    .describe('Raw text content for the "Certifications" section.'),
  workHistoryRaw: z
    .string()
    .describe('Raw text content for the "Work History / Experience" section.'),
  skillsRaw: z.string().describe('Raw text content for the "Skills" section.'),
  projectsRaw: z
    .string()
    .describe('Raw text content for the "Projects Portfolio" section.'),
  contactLinksRaw: z
    .string()
    .describe('Raw text content for the "Contact & Links" section.'),
  visualBrandingRaw: z
    .string()
    .describe(
      'Details about the visual design and branding for context (e.g., colors, fonts, theme).'
    ),
});
export type AiPortfolioContentGeneratorInput = z.infer<
  typeof AiPortfolioContentGeneratorInputSchema
>;

const AiPortfolioContentGeneratorOutputSchema = z.object({
  aboutMe: z.string().describe('Polished content for the "About Me" section.'),
  education: z
    .string()
    .describe('Polished content for the "Education" section.'),
  certifications: z
    .string()
    .describe('Polished content for the "Certifications" section.'),
  workHistory: z
    .string()
    .describe('Polished content for the "Work History / Experience" section.'),
  skills: z.string().describe('Polished content for the "Skills" section.'),
  projects: z
    .string()
    .describe('Polished content for the "Projects Portfolio" section.'),
  contactLinks: z
    .string()
    .describe('Polished content for the "Contact & Links" section.'),
});
export type AiPortfolioContentGeneratorOutput = z.infer<
  typeof AiPortfolioContentGeneratorOutputSchema
>;

export async function aiPortfolioContentGenerator(
  input: AiPortfolioContentGeneratorInput
): Promise<AiPortfolioContentGeneratorOutput> {
  return aiPortfolioContentGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioContentGeneratorPrompt',
  input: {schema: AiPortfolioContentGeneratorInputSchema},
  output: {schema: AiPortfolioContentGeneratorOutputSchema},
  prompt: `You are a professional career branding expert, web content writer, and UX designer.
Your task is to create complete, polished content for a professional online web portfolio based on the information provided below.
The tone should be professional, confident, and clear.
Use concise paragraphs and bullet points where appropriate.
Assume this content will be published on a personal website.

Target Audience: Employers, Cybersecurity Leaders, Government & Defense Organizations

Visual Design & Branding Context (for UX consideration):
{{{visualBrandingRaw}}}

---

Here is the raw content for each section. Please polish each section to meet the requirements and generate the output in a structured JSON format with keys matching the section names (e.g., 'aboutMe', 'education', etc.):

### About Me / Goals:
{{{aboutMeRaw}}}

### Education:
{{{educationRaw}}}

### Certifications:
{{{certificationsRaw}}}

### Work History / Experience:
{{{workHistoryRaw}}}

### Skills:
{{{skillsRaw}}}

### Projects Portfolio:
{{{projectsRaw}}}

### Contact & Links:
{{{contactLinksRaw}}}`,
});

const aiPortfolioContentGeneratorFlow = ai.defineFlow(
  {
    name: 'aiPortfolioContentGeneratorFlow',
    inputSchema: AiPortfolioContentGeneratorInputSchema,
    outputSchema: AiPortfolioContentGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate portfolio content.');
    }
    return output;
  }
);
