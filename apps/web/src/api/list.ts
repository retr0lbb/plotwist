/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query'
import type {
  DeleteListId204,
  DeleteListId404,
  GetListById200,
  GetListById404,
  GetLists200,
  GetLists404,
  GetListsParams,
  PatchListBanner200,
  PatchListBanner404,
  PatchListBannerBody,
  PostList201,
  PostList404,
  PostListBody,
  PutListId200,
  PutListId404,
  PutListIdBody,
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance'

/**
 * Create a list
 */
export const postList = (postListBody: PostListBody) => {
  return axiosInstance<PostList201>({
    url: `/list`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: postListBody,
  })
}

export const getPostListMutationOptions = <
  TError = PostList404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postList>>,
    TError,
    { data: PostListBody },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postList>>,
  TError,
  { data: PostListBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postList>>,
    { data: PostListBody }
  > = (props) => {
    const { data } = props ?? {}

    return postList(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostListMutationResult = NonNullable<
  Awaited<ReturnType<typeof postList>>
>
export type PostListMutationBody = PostListBody
export type PostListMutationError = PostList404

export const usePostList = <
  TError = PostList404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postList>>,
    TError,
    { data: PostListBody },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof postList>>,
  TError,
  { data: PostListBody },
  TContext
> => {
  const mutationOptions = getPostListMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Get lists
 */
export const getLists = (params?: GetListsParams, signal?: AbortSignal) => {
  return axiosInstance<GetLists200>({
    url: `/lists`,
    method: 'GET',
    params,
    signal,
  })
}

export const getGetListsQueryKey = (params?: GetListsParams) => {
  return [`/lists`, ...(params ? [params] : [])] as const
}

export const getGetListsQueryOptions = <
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getLists>>, TError, TData>
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetListsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLists>>> = ({
    signal,
  }) => getLists(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getLists>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getLists>>
>
export type GetListsQueryError = GetLists404

export function useGetLists<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params: undefined | GetListsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getLists>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLists>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetLists<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getLists>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLists>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetLists<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getLists>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetLists<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getLists>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetListsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetListsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getLists>>,
        TError,
        TData
      >
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetListsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLists>>> = ({
    signal,
  }) => getLists(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getLists>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListsSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getLists>>
>
export type GetListsSuspenseQueryError = GetLists404

export function useGetListsSuspense<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params: undefined | GetListsParams,
  options: {
    query: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getLists>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListsSuspense<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getLists>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListsSuspense<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getLists>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetListsSuspense<
  TData = Awaited<ReturnType<typeof getLists>>,
  TError = GetLists404,
>(
  params?: GetListsParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getLists>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetListsSuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Delete list
 */
export const deleteListId = (id: string) => {
  return axiosInstance<DeleteListId204>({
    url: `/list/${id}`,
    method: 'DELETE',
  })
}

export const getDeleteListIdMutationOptions = <
  TError = DeleteListId404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteListId>>,
    TError,
    { id: string },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteListId>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteListId>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {}

    return deleteListId(id)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteListIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteListId>>
>

export type DeleteListIdMutationError = DeleteListId404

export const useDeleteListId = <
  TError = DeleteListId404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteListId>>,
    TError,
    { id: string },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteListId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteListIdMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Update list
 */
export const putListId = (id: string, putListIdBody: PutListIdBody) => {
  return axiosInstance<PutListId200>({
    url: `/list/${id}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: putListIdBody,
  })
}

export const getPutListIdMutationOptions = <
  TError = PutListId404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putListId>>,
    TError,
    { id: string; data: PutListIdBody },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof putListId>>,
  TError,
  { id: string; data: PutListIdBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putListId>>,
    { id: string; data: PutListIdBody }
  > = (props) => {
    const { id, data } = props ?? {}

    return putListId(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PutListIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof putListId>>
>
export type PutListIdMutationBody = PutListIdBody
export type PutListIdMutationError = PutListId404

export const usePutListId = <
  TError = PutListId404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putListId>>,
    TError,
    { id: string; data: PutListIdBody },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof putListId>>,
  TError,
  { id: string; data: PutListIdBody },
  TContext
> => {
  const mutationOptions = getPutListIdMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Get list by ID
 */
export const getListById = (id: string, signal?: AbortSignal) => {
  return axiosInstance<GetListById200>({
    url: `/list/by/${id}`,
    method: 'GET',
    signal,
  })
}

export const getGetListByIdQueryKey = (id: string) => {
  return [`/list/by/${id}`] as const
}

export const getGetListByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getListById>>, TError, TData>
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetListByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getListById>>> = ({
    signal,
  }) => getListById(id, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getListById>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListById>>
>
export type GetListByIdQueryError = GetListById404

export function useGetListById<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getListById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getListById>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListById<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getListById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getListById>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListById<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getListById>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetListById<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getListById>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetListByIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetListByIdSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getListById>>,
        TError,
        TData
      >
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetListByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getListById>>> = ({
    signal,
  }) => getListById(id, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getListById>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListByIdSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListById>>
>
export type GetListByIdSuspenseQueryError = GetListById404

export function useGetListByIdSuspense<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options: {
    query: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getListById>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListByIdSuspense<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getListById>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListByIdSuspense<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getListById>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetListByIdSuspense<
  TData = Awaited<ReturnType<typeof getListById>>,
  TError = GetListById404,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getListById>>,
        TError,
        TData
      >
    >
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetListByIdSuspenseQueryOptions(id, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Update list banner by ID
 */
export const patchListBanner = (patchListBannerBody: PatchListBannerBody) => {
  return axiosInstance<PatchListBanner200>({
    url: `/list/banner`,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: patchListBannerBody,
  })
}

export const getPatchListBannerMutationOptions = <
  TError = PatchListBanner404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchListBanner>>,
    TError,
    { data: PatchListBannerBody },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchListBanner>>,
  TError,
  { data: PatchListBannerBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchListBanner>>,
    { data: PatchListBannerBody }
  > = (props) => {
    const { data } = props ?? {}

    return patchListBanner(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PatchListBannerMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchListBanner>>
>
export type PatchListBannerMutationBody = PatchListBannerBody
export type PatchListBannerMutationError = PatchListBanner404

export const usePatchListBanner = <
  TError = PatchListBanner404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchListBanner>>,
    TError,
    { data: PatchListBannerBody },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof patchListBanner>>,
  TError,
  { data: PatchListBannerBody },
  TContext
> => {
  const mutationOptions = getPatchListBannerMutationOptions(options)

  return useMutation(mutationOptions)
}