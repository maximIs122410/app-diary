import { CREATE_POST, LOAD_POSTS, TOGGLE_FAVORITE } from '../types'
import { DATA } from '../../common/data'

export const LoadPosts = () => {
    return {
        type: LOAD_POSTS,
        usefulData: DATA.postCollection,
    }
}

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        usefulData: id,
    }
}

export const createPost = (post) => {
    post.id = Date.now().toString()

    return {
        type: CREATE_POST,
        usefulData: post,
    }
}
