"use client";

export default function Home() {
  const data: {
    title: string;
    description: string;
    link: string;
    media?: {
      type: "image" | "youtube" | "audio";
      src: string;
    };
  }[] = [
      {
        title: "Dr. Laurie Santos' 5 Favorite Coping Tips",
        description:
          "Thanks for sharing the transcript! Here's a clean summary of the key messages from Dr. Laurie Santos' talk on coping and mental well-being, especially in tough times like 2020. Dr. Laurie Santos' 5 Evidence-Based Coping Strategies: 1. Exercise - Regular cardio (like 30 mins daily) can be as effective as antidepressants. - Boosts mood and well-being. - Laurie's favorites: hiking and yoga. 2. Gratitude - Training your brain to notice positives improves happiness. - Writing down 3 to 5 things you're grateful for daily boosts well-being in just 2 weeks. 3. Sleep - Crucial for mental health. - Avoid screens before bed to reduce anxiety. - Laurie puts her phone to bed to disconnect. 4. Social Connection - Happy people spend more time with others. - Even virtual connections (Zoom calls, etc.) can lift your mood. 5. Feel Your Emotions (RAIN Technique) - Don't suppress emotions — accept and explore them. - RAIN: Recognize, Accept, Investigate, Nurture. Final Message: We're all in this together — these tools help us flourish and protect mental health even in difficult times.",
        link: "https://www.youtube.com/watch?v=kCQim9VrnDY&ab_channel=Dr.LaurieSantos",
        media: {
          type: "youtube",
          src: "https://www.youtube.com/embed/kCQim9VrnDY",
        },
      },

      {
        title: "Facing Horrific Family Trauma & Finding Joy After Divorce",
        description:
          "This episode addresses deeply personal questions around healing, trauma, and the journey toward finding hope in difficult circumstances. Dr. Duff offers insight into the emotional, psychological, and ethical aspects of sharing personal stories and navigating major life transitions. The complexities of publishing a memoir about trauma and abuse, understanding the impact of complex PTSD and generational trauma, navigating family threats and estrangement with personal boundaries, grieving the loss of an idealized future after divorce, why happiness doesn&apos;t have to look how you thought it would, tips for finding support and resilience as a single parent, and the value of community, therapy, and chosen family.",
        link: "https://microsoft.com",
        media: {
          type: "audio",
          src: "https://podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017",
        },
      },
    ];
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <h1 className="uppercase text-3xl">
        Digital Mental Health Interventions and Wellness
      </h1>
      <h2 className="text-xl">
        Find your calm, anonymously. Explore deeper, personally
      </h2>
      <p className="xl:w-[40%]">
        Discover a safe and anonymous space to explore mental health resources
        and begin your wellness journey. When you are ready for deeper insights
        and personalized guidance and unlock the pro version to connect your
        unique challenges with tailored information, all while maintaining the
        privacy you value
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10">
        {/* Card 1 - YouTube */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl">
          <iframe
            className="w-full rounded-lg"
            height="240"
            src="https://www.youtube.com/embed/kCQim9VrnDY"
            title="Dr. Laurie Santos' 5 Favorite Coping Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Dr. Laurie Santos' 5 Favorite Coping Tips</h3>
        </div>

        {/* Card 2 - YouTube */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="240"
            src="https://www.youtube.com/embed/kCQim9VrnDY"
            title="Dr. Laurie Santos' 5 Favorite Coping Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Dr. Laurie Santos' 5 Favorite Coping Tips</h3>
        </div>

        {/* Card 3 - Apple Podcast */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="175"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017"
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Facing Horrific Family Trauma & Finding Joy After Divorce</h3>
        </div>

        {/* Card 4 - Apple Podcast */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="175"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017"
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Facing Horrific Family Trauma & Finding Joy After Divorce</h3>
        </div>
      </div>

    </div>
  );
}
