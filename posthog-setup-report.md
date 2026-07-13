# PostHog post-wizard report

The wizard has completed a PostHog integration for the DevEvent project — a developer events listing site built with Next.js 16.2.10 (App Router). PostHog is initialized via `instrumentation-client.ts` (the recommended pattern for Next.js 15.3+), a reverse proxy is configured in `next.config.ts` to avoid ad-blocker interference, and client-side event capture is added to the two key user interaction points: the "Explore Events" CTA button and the event cards.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button on the homepage hero section. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view details, indicating interest in a specific event. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) Dashboard](https://us.posthog.com/project/509800/dashboard/1838798)
- [Explore Events clicks over time (wizard)](https://us.posthog.com/project/509800/insights/P3RuGgE7)
- [Event card clicks by event title (wizard)](https://us.posthog.com/project/509800/insights/vGdNYHns)
- [Explore to event click funnel (wizard)](https://us.posthog.com/project/509800/insights/krBphAaZ)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` (or any equivalent bootstrap/onboarding script) so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify in PostHog Error Tracking.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
