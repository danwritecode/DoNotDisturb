import { Link } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="max-w-7xl mx-auto px-4 py-10 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-4 place-items-center">
        <h1 class="font-bold text-xl sm:text-4xl xl:text-6xl">Dan wanted to work in peace, but people kept talking to him...</h1>
        <img class="mt-4 lg:mt-0 mx-auto lg:mx-0 w-full h-64 lg:h-96 lg:object-cover" src="https://media3.giphy.com/media/oCdScruZnEHfy/giphy.gif?cid=ecf05e47ht9qzkcxqfdcdbtmqssqr257zpcs27g7jb7zs05x&rid=giphy.gif&ct=g" />
      </div>
      <div class="mt-16 grid lg:grid-cols-2 gap-4 place-items-center">
        <h1 class="font-bold text-xl sm:text-4xl xl:text-6xl">So as any great thinker would do, Dan created an app.</h1>
        <img class="mt-4 lg:mt-0 mx-auto lg:mx-0 w-full h-64 lg:h-96 lg:object-cover" src="https://media1.giphy.com/media/2rqEdFfkMzXmo/giphy.gif?cid=ecf05e47gh0jer3fv6bq6qaaek220fb9obrkfjg6ti3z7rn2&rid=giphy.gif&ct=g" />
      </div>
      <div class="mt-16 grid lg:grid-cols-2 gap-4 place-items-center">
        <h1 class="font-bold text-xl sm:text-4xl xl:text-6xl">When you see a <span class="text-red-500 font-bold">Red Card</span> displayed, do not talk to Dan unless the building is on fire.</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="mt-12 h-56 w-56 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </main>
  );
}
