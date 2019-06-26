<template>
    <div>
        <p>商城信息</p>
        <el-row type="flex">
            <el-col>
            <div>56</div>
            用户数
            </el-col>
            <el-col>
            <div>100</div>
                商品数
            </el-col>
            <el-col>
            <div>1000</div>
            订单总数
            </el-col>
        </el-row>
        <template>
            <span>订单概述</span>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="今日" name="first">3 成交量（件） 200 成交额（元）60订单平均消费（元）</el-tab-pane>
                <el-tab-pane label="昨日" name="second">3 成交量（件） 200 成交额（元）60订单平均消费（元）</el-tab-pane>
                <el-tab-pane label="近7天" name="third">3 成交量（件） 200 成交额（元）60订单平均消费（元）</el-tab-pane>
                <el-tab-pane label="近30天" name="fourth">3 成交量（件） 200 成交额（元）60订单平均消费（元）</el-tab-pane>
            </el-tabs>
        </template>
        <el-card shadow="always">
            近七日浏览量
        </el-card>
    </div>
</template>
<script>
export default {
    name:'Digital',
    data(){
        return{
        activeName: 'first',
        activeName1:'1'
        };
    }
}
</script>
