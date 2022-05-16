<template>
    <div>

        <form action="" @submit.prevent="handleLogin">
            <div class="form-group p-2">
                <input type="text" v-model="form.email">
                <!--class="form-control"                -->
                <span class="text-danger" v-if="errors.email"> {{ errors.email[0] }}</span>
            </div>
            <div class="form-group p-2">
                <input type="password" class="form-control" v-model="form.password">
                <span class="text-danger" v-if="errors.password"> {{ errors.password[0] }}</span>

            </div>
            <button type="submit" class="btn btn-primary p-2 m-3"> Login</button>

            <!-- Modal to show success message -->
            <modal
                v-show="isModalVisible"
                @close="closeModal">
                <template v-slot:header>

                </template>
                <template v-slot:body>
                    <span>You are logged in</span>
                </template>
                <!--                                <template v-slot:footer>-->

                <!--                                </template>-->

            </modal>
            <!--                            -->

        </form>
    </div>
</template>

<script>
import Modal from "./Modal";

export default {
    name: "LoginForm",
    components: {Modal},
    data() {
        return {
            loggedUser: [],
            isModalVisible: false,
            form: {email: null, password: null},
            errors: {},

        }
    },
    methods: {
        closeModal() {
            this.isModalVisible = false;
            window.location = '/';
        },
        async handleLogin() {
            try {
                await axios.get('/sanctum/csrf-cookie')

                await axios.post('/login', this.form)
                    .then(response => {
                         this.getUser()
                    })
                this.isModalVisible = true
                //window.location = '/';

            } catch (error) {
                this.errors = error.response.data.errors
            }
        },
        getUser() {
            axios.get('/api/user').then(response => {
               this.loggedUser = response.data
                console.log(this.loggedUser)
            })
        }

    }
}
</script>

<style scoped>

</style>
