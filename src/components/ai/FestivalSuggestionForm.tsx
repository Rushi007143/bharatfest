'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { festivalSuggestion } from '@/ai/flows/festival-suggestion';

const formSchema = z.object({
  interests: z.string().min(3, 'Please enter at least one interest.'),
});

export default function FestivalSuggestionForm() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const result = await festivalSuggestion({ interests: values.interests });
      if (result?.festivals) {
        setSuggestions(result.festivals);
      }
    } catch (e) {
      setError('Sorry, we could not generate suggestions at this time. Please try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-2 border-primary/20">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full mb-2">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-2xl">Don't know where to start?</CardTitle>
        <CardDescription>Get AI-powered festival suggestions based on your interests!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests (e.g., music, food, dance)</FormLabel>
                  <FormControl>
                    <Input placeholder="Tell us what you like..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Suggest Festivals'}
            </Button>
          </form>
        </Form>
        {error && <p className="text-destructive text-sm mt-4 text-center">{error}</p>}
        {suggestions.length > 0 && (
          <div className="mt-6">
            <h4 className="font-bold mb-2">Here are some suggestions for you:</h4>
            <ul className="list-disc list-inside bg-card p-4 rounded-md border">
              {suggestions.map((s, i) => (
                <li key={i} className="text-foreground/90">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
