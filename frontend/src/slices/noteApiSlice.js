import { apiSlice } from "./apiSlice";

const NOTE_URL = '/note';

export const noteApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addNote: builder.mutation({
            query: ({chapterId, title, summary, body}) => ({
                url: chapterId? `${NOTE_URL}/${chapterId}`:NOTE_URL,
                method: 'POST',
                body : {
                    title,
                    summary,
                    body
                }
            }),
            invalidatesTags: ['Chapter']
        })
    })
})

export const {
    useAddNoteMutation
} = noteApiSlice