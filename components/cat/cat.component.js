import Operator from '../../utils/model/operator/index';

import catModel from '../../models/cat/cat.model';
import catService from '../../services/cat/cat.service';

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
            message: 'Cat Page',
            description: 'Cats show up here.',
            catConfig: {
                loading: true,
                error: false
            },
            cat: catModel,
            cats: []
        }
    },
    mounted() {
        this.bindCats();
    },
    methods: {
        bindCats() {
            this.catConfig.loading = true;
            this.catConfig.error = false;

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
        storeCat() {
            catService.store(this, this.cat)
                .then(
                    res => {
                        this.cats.push(Operator.single(catModel, res.body.data));
                        this.cat = Operator.reset(catModel);
                    },
                    err => {
                        this.$refs.toast.setMessage('Error store cats, check your cat input again.');
                        this.$refs.toast.show();
                    }
                )
        },
        deleteCat(cat) {
            catService.delete(this, cat.id)
                .then(
                    res => {
                        this.cats.splice(this.cats.indexOf(cat), 1);
                    },
                    err => {
                        this.$refs.toast.setMessage('Error delete cat');
                        this.$refs.toast.show();
                    }
                )
        },
        editCat(cat) {
            this.cats[this.cats.indexOf(cat)].onedit = true;
        },
        updateCat(cat) {
            catService.update(this, cat.id, cat)
                .then(
                    res => {
                        this.cats[this.cats.indexOf(cat)].onedit = false;
                    },
                    err => {
                        this.$refs.toast.setMessage('Error update cat');
                        this.$refs.toast.show();
                    }
                );
        }
    }
}
