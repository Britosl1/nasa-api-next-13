export default function About() {
  return (
    <div className="pt-12">
      <p className="text-center	mb-5 text-sm text-color-1">
        Project made to test Next13. It was used Nasa API to fetch data. The
        APIs used were
        <strong> APOD</strong> (Astronomy Picture of the Day) and
        <strong> Mars Rovers Photos.</strong> APOD will be updated once a day
        with the daily picture and Mars Rover Photos twice a day with pictures
        from two cameras: FHAZ and RHAZ.
      </p>
      <ul className="flex justify-around text-sm text-color-1">
        <li>
          <a
            className="cursor-pointer hover:text-color-3 hover:font-bold"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Made with Next13
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-color-3 hover:font-bold"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-color-3 hover:font-bold"
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noreferrer"
          >
            NASA Api
          </a>
        </li>
      </ul>
      <hr className="bg-color-3 h-0.5 " />
    </div>
  );
}
