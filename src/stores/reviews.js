import { defineStore } from "pinia"
import {BASE_URL} from "../constant"

export const useReviewsStore = defineStore("reviews", {
    state: () => ({
        reviews: [],
        editedData: {
            editable: false,
            item: null,
        }
    }),
    actions: {
        async addReview(review){
            const response = await fetch(`${BASE_URL}/api/reviews`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review)
            })
            const newReview = await response.json()
            this.reviews = [newReview, ...this.reviews]
        },
        async fetchReviews(){
            try {
                const reviews = await fetch(`${BASE_URL}/api/reviews`)
                const data = await reviews.json()
                this.reviews = data
            } catch (error) {
                console.log(error);
            }
        },
        editReview(review){
            let editedData = {
                editable: true,
                item: review
            }
            this.editedData = editedData
        },
        async updateReview(review){
            const response = await fetch(`${BASE_URL}/api/reviews/${review.id}`,{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review)
            })
            const updatedReview = await response.json()
            let reviews = this.reviews.map(item => item.id === review.id? {...item, ...updatedReview}: item)
            this.fetchReviews();
            let  editedData = {
                editable: false,
                item: null,
            }
            this.editedData = editedData;
        },
        async deleteReview(review){
            await fetch(`${BASE_URL}/api/reviews/${review.id}`,{
                method:"DELETE",
            })
            this.reviews = this.reviews.filter(rev => rev.id !== review.id)
            this.fetchReviews()
        }
    },
    getters: {
        averageRating(state) {
            let temp = state.reviews.reduce((acc, cur) => {
                return acc + cur.rating
            }, 0) / state.reviews.length

            temp = temp.toFixed(1).replace(/[.,]0$/,"")
            return temp
        },
        reviewsCount(){
            return this.reviews.length
        },
        reviewsContent(){
            return this.reviews
        },
        editedContent(){
            return this.editedData
        },
    }
})