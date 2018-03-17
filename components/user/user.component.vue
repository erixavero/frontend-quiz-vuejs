<template>
    <div class="container">
        <toast ref="toast"></toast>
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
                            <form role="form" @submit.prevent="storeUser()">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" required v-model="user.name">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email" required v-model="user.email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Your Password" required v-model="user.password">
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Create User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loading-panel message="Fetch users from server"
                       v-if="userConfig.loading && !userConfig.error">
        </loading-panel>
        <error-panel message="Failed fetch users from server"
                     v-if="!userConfig.loading && userConfig.error"
                     @onErrorHandled="bindUsers()">
        </error-panel>
        <div class="row" v-if="!userConfig.loading && !userConfig.error">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 5%;">#ID</th>
                            <th class="text-center" style="width: 20%;">Name</th>
                            <th class="text-center" style="width: 20%;">Email</th>
                            <th class="text-center" style="width: 20%;">Created At</th>
                            <th class="text-center" style="width: 20%;">Updated At</th>
                            <th class="text-center">...</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users">
                            <td class="text-center">{{ user.id }}</td>
                            <td class="text-center">
                                <span v-if="!user.onedit">{{ user.name }}</span>
                                <input type="text" class="form-control" v-model="user.name" v-if="user.onedit" placeholder="User Name">
                            </td>
                            <td class="text-center">
                                <span v-if="!user.onedit">{{ user.email }}</span>
                                <input type="email" class="form-control" v-model="user.email" v-if="user.onedit" placeholder="User Email">
                            </td>
                            <td class="text-center">{{ user.created_at }}</td>
                            <td class="text-center">{{ user.updated_at }}</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-sm btn-success" v-if="!user.onedit" @click="editUser(user)">Edit</button>
                                <button type="button" class="btn btn-sm btn-success" v-if="user.onedit"
                                        :disabled="user.name == '' || user.email == ''"
                                        @click="updateUser(user)">Save</button>
                                <button type="button" class="btn btn-sm btn-danger" @click="deleteUser(user)">Del</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./user.component.js"></script>