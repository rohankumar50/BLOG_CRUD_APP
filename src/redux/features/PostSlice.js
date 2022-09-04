import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//getdata api
export const getPost = createAsyncThunk('post/getPosts',
    async ({ id }) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
    }
);

//delete api
export const deletePost = createAsyncThunk('post/deletePosts',
    async ({ id }) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' }).then((res) => res.json())
    }
);

//create api
export const createPost = createAsyncThunk('post/createPosts',
    async ({ values }) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`,
            {
                method: "POST",
                headers: {
                    Accept: 'application/json', "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: values.title,
                    body: values.body
                })
            }).then((res) => res.json())
    }
);

//update api
export const updatePost = createAsyncThunk('post/updatePosts',
    async ({ id, title, body }) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: "PUT",
                headers: {
                    Accept: 'application/json', "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    body
                })
            }).then((res) => res.json())
    }
);



const PostSlice = createSlice({
    name: 'post',
    initialState: {
        loading: false,
        post: [],
        error: null,
        body: "",
        edit: false
    },
    reducers: {
        setEdit: (state, action) => {
            state.body = action.payload.body
            state.edit = action.payload.edit
        }
    },
    extraReducers: {

        //get post

        [getPost.pending]: (state, action) => {
            state.loading = true
        },
        [getPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [getPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        //delete post

        [deletePost.pending]: (state, action) => {
            state.loading = true
        },
        [deletePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [deletePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        //create post

        [createPost.pending]: (state, action) => {
            state.loading = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [createPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        //update post

        [updatePost.pending]: (state, action) => {
            state.loading = true
        },
        [updatePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [updatePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
})

export const { setEdit } = PostSlice.actions;
export default PostSlice.reducer;  