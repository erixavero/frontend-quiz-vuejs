<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <div class="row">
                        <div class="col-md-6">
                            <h1>{{ message }}</h1>
                            <p>{{ description }}</p>
                        </div>
                        <div class="col-md-4 col-md-push-2">
                            <p class="text-center">
                                <strong>Create New User</strong>
                            </p>
                            <form role="form" @submit.prevent="signup()">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your name" required v-model="user.name">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email" required v-model="user.email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Your Password" required v-model="user.password">
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script src="./user.component.js"></script>
