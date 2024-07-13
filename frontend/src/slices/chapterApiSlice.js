import { apiSlice } from "./apiSlice";

const CHAPTER_URL = '/chapter'

export const chapterApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getChapter: builder.query({
            query: (chapterId) => ({
                url: chapterId? `${CHAPTER_URL}/${chapterId}`: CHAPTER_URL
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Chapter']
        }),
        addChapter: builder.mutation({
            query: ({chapterId, chapter}) => ({
                url: chapterId? `${CHAPTER_URL}/${chapterId}`: CHAPTER_URL,
                method: 'POST',
                body: {title:chapter, body: "sux"}
            }),
            invalidatesTags: ['Chapter']
        })
    })
})

export const {
    useGetChapterQuery,
    useAddChapterMutation
} = chapterApiSlice;