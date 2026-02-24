export interface MoonPhase {
  phase: string;
  illumination: number;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    background: string;
    foreground: string;
  };
}

export interface MoonData {
  moon_phase: string;
  moon_illumination: string;
}

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/astronomy.json';

export async function fetchMoonPhase(): Promise<MoonPhase> {
  try {
    // Ciudad Juárez coordinates
    const response = await fetch(
      `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=31.6904,-106.4245&dt=${new Date().toISOString().split('T')[0]}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return getDefaultMoonPhase();
    }

    const data = await response.json();
    const moonData: MoonData = {
      moon_phase: data.astronomy?.astro?.moon_phase || 'New Moon',
      moon_illumination: data.astronomy?.astro?.moon_illumination || '0',
    };

    return mapMoonPhaseToTheme(moonData);
  } catch (error) {
    console.error('Error fetching moon phase:', error);
    return getDefaultMoonPhase();
  }
}

function mapMoonPhaseToTheme(moonData: MoonData): MoonPhase {
  const illumination = parseInt(moonData.moon_illumination);
  const phase = moonData.moon_phase;

  // Luna Nueva (New Moon) - 0-15% illumination
  if (illumination <= 15 || phase.toLowerCase().includes('new moon')) {
    return {
      phase: 'Luna Nueva',
      illumination,
      theme: {
        background: '#0a0e1a',
        foreground: '#e8e9ed',
        primary: '#2a2f4c',
        secondary: '#1c1f2e',
        accent: '#7881a8',
        glow: 'rgba(120, 129, 168, 0.3)',
      },
    };
  }

  //Creciente (Waxing Crescent) - 16-40%
  if (illumination <= 40) {
    return {
      phase: 'Creciente',
      illumination,
      theme: {
        background: '#0e1420',
        foreground: '#e8e9ed',
        primary: '#3a4f6c',
        secondary: '#22293a',
        accent: '#94a8c8',
        glow: 'rgba(148, 168, 200, 0.35)',
      },
    };
  }

  // Cuarto Creciente (First Quarter) - 41-60%
  if (illumination <= 60) {
    return {
      phase: 'Cuarto Creciente',
      illumination,
      theme: {
        background: '#121826',
        foreground: '#e8e9ed',
        primary: '#4a5f7c',
        secondary: '#2a3444',
        accent: '#a5b8d4',
        glow: 'rgba(165, 184, 212, 0.4)',
      },
    };
  }

  // Gibosa Creciente & Luna Llena (Waxing Gibbous & Full Moon) - 61-100%
  if (illumination <= 100) {
    return {
      phase: illumination >= 95 ? 'Luna Llena' : 'Gibosa Creciente',
      illumination,
      theme: {
        background: '#1a2030',
        foreground: '#f5f5f7',
        primary: '#5a6f8c',
        secondary: '#364258',
        accent: '#bcc8de',
        glow: 'rgba(188, 200, 222, 0.5)',
      },
    };
  }

  return getDefaultMoonPhase();
}

function getDefaultMoonPhase(): MoonPhase {
  return {
    phase: 'Luna Nueva',
    illumination: 0,
    theme: {
      background: '#0a0e1a',
      foreground: '#e8e9ed',
      primary: '#3a3f5c',
      secondary: '#1c1f2e',
      accent: '#a0a7d8',
      glow: 'rgba(160, 167, 216, 0.4)',
    },
  };
}

// Client-side moon phase calculator (fallback)
export function calculateLocalMoonPhase(): MoonPhase {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // Simple lunar phase calculation
  let c = 0;
  let e = 0;
  let jd = 0;
  let b = 0;

  if (month < 3) {
    const yearAdj = year - 1;
    const monthAdj = month + 12;
    c = yearAdj / 100;
    jd = Math.floor(365.25 * yearAdj) + Math.floor(30.6 * (monthAdj + 1)) + day + 1720994.5;
  } else {
    c = year / 100;
    jd = Math.floor(365.25 * year) + Math.floor(30.6 * (month + 1)) + day + 1720994.5;
  }

  const daysSinceNew = jd - 2451549.5;
  const newMoons = daysSinceNew / 29.53;
  const phaseDecimal = newMoons - Math.floor(newMoons);
  const illumination = Math.round(phaseDecimal * 100);

  return mapMoonPhaseToTheme({
    moon_phase: getPhaseNameFromIllumination(illumination),
    moon_illumination: illumination.toString(),
  });
}

function getPhaseNameFromIllumination(illumination: number): string {
  if (illumination <= 15) return 'New Moon';
  if (illumination <= 40) return 'Waxing Crescent';
  if (illumination <= 60) return 'First Quarter';
  if (illumination <= 85) return 'Waxing Gibbous';
  if (illumination <= 100) return 'Full Moon';
  return 'New Moon';
}
