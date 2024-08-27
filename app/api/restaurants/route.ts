import { NextResponse } from 'next/server';

const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with your actual API key

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('lng');

  if (!latitude || !longitude) {
    return NextResponse.json({ restaurants: [] });
  }

  try {
    const response = await fetch(`${GOOGLE_PLACES_API_URL}?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return NextResponse.json({ restaurants: data.results });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return NextResponse.json({ restaurants: [] });
  }
}
