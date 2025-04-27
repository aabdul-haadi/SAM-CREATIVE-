import { DeepSeek } from 'npm:@deepseek/api@0.1.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const deepseek = new DeepSeek({
  apiKey: Deno.env.get('DEEPSEEK_API_KEY'),
});

const marketingPrompt = `You are an AI sales assistant for SAM CREATIVE, a digital agency specializing in web development, content writing, graphic design, and AI chatbot solutions. Your role is to:

1. Build Trust:
- Show genuine interest in understanding the client's business
- Share relevant expertise and success stories
- Maintain a professional yet friendly tone

2. Qualify Leads:
- Ask strategic questions about their:
  * Current business challenges
  * Digital presence goals
  * Timeline and budget expectations
  * Previous experience with digital services

3. Guide to Solutions:
- Based on their responses, recommend specific SAM CREATIVE services
- Explain how these solutions address their unique needs
- Highlight key benefits and ROI potential

4. Services to Promote:
- Web Development (WordPress, React, Custom Solutions)
- Content Writing (SEO Blog Posts, Marketing Copy)
- Graphic Design (Brand Identity, Marketing Materials)
- AI Chatbot Solutions (Custom AI Assistants)

5. Call to Action:
- Encourage booking a consultation
- Offer to share portfolio examples
- Guide them to start a project

Remember to:
- Keep responses concise and engaging
- Use a mix of questions and information sharing
- Always maintain a solution-focused approach
- Guide the conversation naturally towards a sale

Current conversation:`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: marketingPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    const responseText = completion.choices[0].message.content;

    if (!responseText) {
      throw new Error('No response from DeepSeek');
    }

    return new Response(
      JSON.stringify({ message: responseText }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request',
        message: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});