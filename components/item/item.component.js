import Operator from '../../utils/model/operator/index';

import itemModel from '../../models/item/item.model';
import itemService from '../../services/item/item.service';
import catService from '../../services/cat/cat.service';
import catModel from '../../models/cat/cat.model';

import LoadingPanel from '../commons/loading-panel/loading-panel.common.vue';
import ErrorPanel from '../commons/error-panel/error-panel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
    components: {
        'loading-panel': LoadingPanel,
        'error-panel': ErrorPanel,
        'toast': Toast
    },
    data() {
        return {
            message: 'Item Page',
            description: 'Items show up here.',
            itemConfig: {
                loading: true,
                error: false
            },
            item: itemModel,
            items: [],
            cat: catModel,
            cats: []
        }
    },
    mounted() {
        this.bindCats();
        this.bindItems();
    },
    methods: {
        bindItems() {
            this.itemConfig.loading = true;
            this.itemConfig.error = false;

            itemService.fetch(this)
                .then(
                    res => {
                        this.items = Operator.map(itemModel, res.body.data);
                        this.itemConfig.loading = false;
                    },
                    err => {
                        this.itemConfig.loading = false;
                        this.itemConfig.error = true;
                    }
                );
        },
        storeItem() {
            itemService.store(this, this.item)
                .then(
                    res => {
                        this.items.push(Operator.single(itemModel, res.body.data));
                        this.item = Operator.reset(itemModel);
                    },
                    err => {
                        this.$refs.toast.setMessage('Error store items, check your item input again.');
                        this.$refs.toast.show();
                    }
                )
        },
        deleteItem(item) {
            itemService.delete(this, item.id)
                .then(
                    res => {
                        this.items.splice(this.items.indexOf(item), 1);
                    },
                    err => {
                        this.$refs.toast.setMessage('Error delete item');
                        this.$refs.toast.show();
                    }
                )
        },
        editItem(item) {
            this.items[this.items.indexOf(item)].onedit = true;
        },
        updateItem(item) {
            itemService.update(this, item.id, item)
                .then(
                    res => {
                        this.items[this.items.indexOf(item)].onedit = false;
                    },
                    err => {
                        this.$refs.toast.setMessage('Error update item');
                        this.$refs.toast.show();
                    }
                );
        },
        bindCats() {
            catService.fetch(this)
                .then(
                    res => {
                        this.cats = Operator.map(catModel, res.body.data);
                        this.catConfig.loading = false;
                    },
                    err => {
                        this.catConfig.loading = false;
                        this.catConfig.error = true;
                    }
                );
        },
    }
}
