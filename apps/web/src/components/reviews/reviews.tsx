'use client'

import { MovieDetails, TvSerieDetails } from '@/services/tmdb'

import {
  ReviewItem,
  ReviewItemSkeleton,
} from '@/components/reviews/review-item'
import { ReviewForm } from '@/components/reviews/review-form'

import { MediaType } from '@/types/supabase/media-type'
import { useLanguage } from '@/context/language'
import { useGetReviews } from '@/api/reviews'

type TmdbItem = TvSerieDetails | MovieDetails

export type ReviewsProps = {
  tmdbItem: TmdbItem
  mediaType: MediaType
}

export const Reviews = ({ tmdbItem, mediaType }: ReviewsProps) => {
  const { language } = useLanguage()

  const { data, isLoading } = useGetReviews({
    tmdbId: String(tmdbItem.id),
    mediaType,
    language,
  })

  if (isLoading) {
    return (
      <section className="space-y-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <ReviewItemSkeleton key={index} />
        ))}
      </section>
    )
  }

  if (!data) return <></>

  return (
    <section className="space-y-8">
      {data.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          tmdbItem={tmdbItem}
          mediaType={mediaType}
        />
      ))}

      <ReviewForm mediaType={mediaType} tmdbItem={tmdbItem} />
    </section>
  )
}
