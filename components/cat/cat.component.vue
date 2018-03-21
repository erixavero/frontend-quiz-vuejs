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
                                <strong>New Cats Here</strong>
                            </p>
                            <form role="form" @submit.prevent="storeCat()">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Cat Name" required v-model="cat.name">
                                </div>
                                
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Create Cat</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loading-panel message="Fetch cats from server"
                       v-if="catConfig.loading && !catConfig.error">
        </loading-panel>
        <error-panel message="Failed fetch cats from server"
                     v-if="!catConfig.loading && catConfig.error"
                     @onErrorHandled="bindCats()">
        </error-panel>
        <div class="row" v-if="!catConfig.loading && !catConfig.error">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 5%;">#ID</th>
                            <th class="text-center" style="width: 20%;">Name</th>
                            <th class="text-center">...</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="cat in cats">
                            <td class="text-center">{{ cat.id }}</td>
                            <td class="text-center">
                                <span v-if="!cat.onedit">{{ cat.name }}</span>
                                <input type="text" class="form-control" v-model="cat.name" v-if="cat.onedit" placeholder="Cat Name">
                            </td>

                            <td class="text-center">{{ cat.created_at }}</td>
                            <td class="text-center">{{ cat.updated_at }}</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-sm btn-success" v-if="!cat.onedit" @click="editCat(cat)">Edit</button>
                                <button type="button" class="btn btn-sm btn-success" v-if="cat.onedit"
                                        :disabled="cat.name == '' || cat.email == ''"
                                        @click="updateCat(cat)">Save</button>
                                <button type="button" class="btn btn-sm btn-danger" @click="deleteCat(cat)">Del</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./cat.component.js"></script>
