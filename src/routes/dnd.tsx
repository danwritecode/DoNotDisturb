import { Link } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="max-w-7xl mx-auto px-4 py-10 lg:py-20">
      <div>
        <h1 class="text-5xl font-bold text-center">
          Do not Disturb Active
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="mt-12 h-56 w-56 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-12 text-center">
          Click <a href="/" class="underline">here</a> to learn more about this.  
        </p>
      </div>
    </main>
  );
}
