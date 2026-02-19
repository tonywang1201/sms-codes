/**
 * Extract verification code from SMS body.
 * Priority: 6-digit → 4-digit → 8-digit → alphanumeric mixed code
 */
export function extractCode(body: string): string | null {
  // 6-digit numeric code
  const six = body.match(/\b(\d{6})\b/);
  if (six) return six[1];

  // 4-digit numeric code
  const four = body.match(/\b(\d{4})\b/);
  if (four) return four[1];

  // 8-digit numeric code
  const eight = body.match(/\b(\d{8})\b/);
  if (eight) return eight[1];

  // Alphanumeric mixed code (e.g. A3B-7K2)
  const mixed = body.match(/\b([A-Z0-9]{3,4}[-]?[A-Z0-9]{3,4})\b/i);
  if (mixed) {
    const candidate = mixed[1];
    // Must contain both letters and digits to qualify
    if (/[A-Za-z]/.test(candidate) && /\d/.test(candidate)) {
      return candidate;
    }
  }

  return null;
}
