import Operator from '../../utils/model/operator/index';

import UserModel from '../../models/user/user.model';
import UserService from '../../services/user/user.service';

import LoadingPanel from '../commons/loading-panel/loading-panel.common.vue';
import ErrorPanel from '../commons/error-panel/error-panel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
    data() {
        return {
            user: UserModel,
            users: []
        }
    },

    methods: {
        login(){
            UserService.login(this,this.user)
            .then(
              res => {
                        this.users.push(Operator.single(UserModel, res.body.data));
                        this.user = Operator.reset(UserModel);
                    },
            )
            .catch(
              (error) => console.log(error)
            )
        },
        signup(){
            UserService.store(this,this.user)
            .then(
              res => {
                        this.users.push(Operator.single(UserModel, res.body.data));
                        this.user = Operator.reset(UserModel);
                    },
            )
            .catch(
              (error) => console.log(error)
            )
        }
    }
}
