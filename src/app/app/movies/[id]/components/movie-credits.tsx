import { TMDB } from '@/services/TMDB'
import Image from 'next/image'

type MovieCreditsProps = { movieId: number }

export const MovieCredits = async ({ movieId }: MovieCreditsProps) => {
  const { cast, crew } = await TMDB.movies.credits(movieId)

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h5 className="text-xl font-bold">Cast</h5>

        <div className="grid grid-cols-6 gap-4">
          {cast.map(({ profile_path: profilePath, name, id, character }) => {
            if (!profilePath) return <></>

            const profileURL = `https://image.tmdb.org/t/p/w500/${profilePath}`

            return (
              <div
                key={id}
                className="flex flex-col space-x-2 overflow-hidden rounded-md  border bg-muted shadow"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-background/50">
                  {profilePath ? (
                    <Image
                      loading="lazy"
                      src={profileURL}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="select-none text-2xl">{name[0]}</span>
                  )}
                </div>

                <div className="flex flex-col space-y-0 py-2">
                  <span className="text-sm">{name}</span>
                  <span className="text-xs text-muted-foreground">
                    as {character || 'Unknown'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="space-y-2">
        <h5 className="text-xl font-bold">Crew</h5>

        <div className="grid grid-cols-6 gap-4">
          {crew.map(({ profile_path: profilePath, name, id, department }) => {
            if (!profilePath) return <></>

            const profileURL = `https://image.tmdb.org/t/p/w500/${profilePath}`

            return (
              <div
                key={id}
                className="flex flex-col space-x-2 overflow-hidden rounded-md  border bg-muted shadow"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-background/50">
                  {profilePath ? (
                    <Image
                      src={profileURL}
                      alt={name}
                      loading="lazy"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="select-none text-2xl">{name[0]}</span>
                  )}
                </div>

                <div className="flex flex-col space-y-0 py-2">
                  <span className="text-sm">{name}</span>
                  <span className="text-xs text-muted-foreground">
                    as {department || 'Unknown'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
