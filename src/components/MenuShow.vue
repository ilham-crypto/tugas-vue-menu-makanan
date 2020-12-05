<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-title">
                <h3 class="card-title">Daftar Menu</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Hari</th>
                                <th>Menu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in menu" :key="index">
                                <td>{{ index+1}}</td>
                                <td>{{ row.hari}}</td>
                                <td>{{ row.menu}}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuShow',
    computed: {
        menu() {
            return this.$store.state.listMenu
        }
    }
}
</script>