/**
 * GradientBridge — A subtle full-width gradient strip that smoothly
 * transitions between two differently-coloured adjacent sections.
 * Purely decorative; invisible to screen readers & pointer events.
 *
 * Usage:
 *   <GradientBridge from="#1a0b2e" to="#ffffff" />
 */

interface GradientBridgeProps {
  /** Starting colour (top of the bridge, matches section above) */
  from: string;
  /** Optional intermediate stop to control the colour curve (e.g. kill saturation spikes) */
  via?: string;
  /** Ending colour (bottom of the bridge, matches section below) */
  to: string;
  /** Tailwind height classes — defaults to a medium strip */
  height?: string;
}

const GradientBridge = ({
  from,
  via,
  to,
  height = 'h-20 sm:h-28',
}: GradientBridgeProps) => (
  <div
    role="presentation"
    aria-hidden="true"
    className={`w-full ${height} pointer-events-none`}
    style={{
      background: via
        ? `linear-gradient(to bottom, ${from}, ${via}, ${to})`
        : `linear-gradient(to bottom, ${from}, ${to})`,
    }}
  />
);

export default GradientBridge;
