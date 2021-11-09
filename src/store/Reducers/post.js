import { CREATE_POST, LOAD_POSTS, TOGGLE_FAVORITE } from '../types'

const initialState = {
    postCollection: [],
    favoritesPosts: [],
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                postCollection: action.usefulData,
                favoritesPosts: action.usefulData.filter((post) => post.favorite),
            }
        case TOGGLE_FAVORITE:
            const postCollection = state.postCollection.map((post) => {
                if (post.id === action.usefulData) {
                    post.favorite = !post.favorite
                }
                return post
            })

            return {
                ...state,
                postCollection: postCollection,
                favoritesPosts: postCollection.filter((post) => post.favorite),
            }
        case CREATE_POST:
            return {
                ...state,
                postCollection: [{ ...action.usefulData }, ...state.postCollection],
            }
        default:
            return state
    }
}
