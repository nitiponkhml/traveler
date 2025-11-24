import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const { error: supabaseError } = await supabase
      .from('subscriptions')
      .insert({ name, email });

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);

      if (supabaseError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already subscribed!' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Subscription successful!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
