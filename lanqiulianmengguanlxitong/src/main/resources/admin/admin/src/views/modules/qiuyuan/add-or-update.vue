<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='qiudui'">
                    <el-form-item class="select" v-if="type!='info'"  label="球队" prop="qiuduiId">
                        <el-select v-model="ruleForm.qiuduiId" :disabled="ro.qiuduiId" filterable placeholder="请选择球队" @change="qiuduiChange">
                            <el-option
                                    v-for="(item,index) in qiuduiOptions"
                                    v-bind:key="item.id"
                                    :label="item.qiuduiName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队名称" prop="qiuduiName">
                        <el-input v-model="qiuduiForm.qiuduiName"
                                  placeholder="球队名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队名称" prop="qiuduiName">
                            <el-input v-model="ruleForm.qiuduiName"
                                      placeholder="球队名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队编号" prop="qiuduiUuidNumber">
                        <el-input v-model="qiuduiForm.qiuduiUuidNumber"
                                  placeholder="球队编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队编号" prop="qiuduiUuidNumber">
                            <el-input v-model="ruleForm.qiuduiUuidNumber"
                                      placeholder="球队编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='qiudui' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.qiuduiPhoto" label="球队照片" prop="qiuduiPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (qiuduiForm.qiuduiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.qiuduiPhoto" label="球队照片" prop="qiuduiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.qiuduiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队主教练" prop="qiuduiJiaiolian">
                        <el-input v-model="qiuduiForm.qiuduiJiaiolian"
                                  placeholder="球队主教练" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队主教练" prop="qiuduiJiaiolian">
                            <el-input v-model="ruleForm.qiuduiJiaiolian"
                                      placeholder="球队主教练" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="所属国家" prop="qiuduiGuojia">
                        <el-input v-model="qiuduiForm.qiuduiGuojia"
                                  placeholder="所属国家" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="所属国家" prop="qiuduiGuojia">
                            <el-input v-model="ruleForm.qiuduiGuojia"
                                      placeholder="所属国家" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队地点" prop="qiuduiAddress">
                        <el-input v-model="qiuduiForm.qiuduiAddress"
                                  placeholder="球队地点" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队地点" prop="qiuduiAddress">
                            <el-input v-model="ruleForm.qiuduiAddress"
                                      placeholder="球队地点" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="赞" prop="zanNumber">
                        <el-input v-model="qiuduiForm.zanNumber"
                                  placeholder="赞" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="赞" prop="zanNumber">
                            <el-input v-model="ruleForm.zanNumber"
                                      placeholder="赞" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="踩" prop="caiNumber">
                        <el-input v-model="qiuduiForm.caiNumber"
                                  placeholder="踩" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="踩" prop="caiNumber">
                            <el-input v-model="ruleForm.caiNumber"
                                      placeholder="踩" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队创建时间" prop="chuangjianTime">
                        <el-input v-model="qiuduiForm.chuangjianTime"
                                  placeholder="球队创建时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队创建时间" prop="chuangjianTime">
                            <el-input v-model="ruleForm.chuangjianTime"
                                      placeholder="球队创建时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队类型" prop="qiuduiValue">
                        <el-input v-model="qiuduiForm.qiuduiValue"
                                  placeholder="球队类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队类型" prop="qiuduiValue">
                            <el-input v-model="ruleForm.qiuduiValue"
                                      placeholder="球队类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiudui' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球队热度" prop="qiuduiClicknum">
                        <el-input v-model="qiuduiForm.qiuduiClicknum"
                                  placeholder="球队热度" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球队热度" prop="qiuduiClicknum">
                            <el-input v-model="ruleForm.qiuduiClicknum"
                                      placeholder="球队热度" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="球员姓名" prop="qiuyuanName">
                       <el-input v-model="ruleForm.qiuyuanName"
                                 placeholder="球员姓名" clearable  :readonly="ro.qiuyuanName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="球员姓名" prop="qiuyuanName">
                           <el-input v-model="ruleForm.qiuyuanName"
                                     placeholder="球员姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.qiuyuanPhoto" label="头像" prop="qiuyuanPhoto">
                        <file-upload
                            tip="点击上传头像"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.qiuyuanPhoto?$base.url+ruleForm.qiuyuanPhoto:''"
                            @change="qiuyuanPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.qiuyuanPhoto" label="头像" prop="qiuyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.qiuyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="性别" prop="sexTypes">
                        <el-select v-model="ruleForm.sexTypes" :disabled="ro.sexTypes" placeholder="请选择性别">
                            <el-option
                                v-for="(item,index) in sexTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                        <el-input v-model="ruleForm.sexValue"
                            placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="身高" prop="qiuyuanShengao">
                       <el-input v-model="ruleForm.qiuyuanShengao"
                                 placeholder="身高" clearable  :readonly="ro.qiuyuanShengao"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="身高" prop="qiuyuanShengao">
                           <el-input v-model="ruleForm.qiuyuanShengao"
                                     placeholder="身高" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="体重" prop="qiuyuanTizhong">
                       <el-input v-model="ruleForm.qiuyuanTizhong"
                                 placeholder="体重" clearable  :readonly="ro.qiuyuanTizhong"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="体重" prop="qiuyuanTizhong">
                           <el-input v-model="ruleForm.qiuyuanTizhong"
                                     placeholder="体重" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="年龄" prop="qiuyuanAge">
                       <el-input v-model="ruleForm.qiuyuanAge"
                                 placeholder="年龄" clearable  :readonly="ro.qiuyuanAge"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="年龄" prop="qiuyuanAge">
                           <el-input v-model="ruleForm.qiuyuanAge"
                                     placeholder="年龄" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="进球数" prop="qiuyuanJinqiushu">
                       <el-input v-model="ruleForm.qiuyuanJinqiushu"
                                 placeholder="进球数" clearable  :readonly="ro.qiuyuanJinqiushu"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="进球数" prop="qiuyuanJinqiushu">
                           <el-input v-model="ruleForm.qiuyuanJinqiushu"
                                     placeholder="进球数" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="助攻数" prop="qiuyuanZhugong">
                       <el-input v-model="ruleForm.qiuyuanZhugong"
                                 placeholder="助攻数" clearable  :readonly="ro.qiuyuanZhugong"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="助攻数" prop="qiuyuanZhugong">
                           <el-input v-model="ruleForm.qiuyuanZhugong"
                                     placeholder="助攻数" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="获得奖杯" prop="qiuyuanJiangbei">
                       <el-input v-model="ruleForm.qiuyuanJiangbei"
                                 placeholder="获得奖杯" clearable  :readonly="ro.qiuyuanJiangbei"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="获得奖杯" prop="qiuyuanJiangbei">
                           <el-input v-model="ruleForm.qiuyuanJiangbei"
                                     placeholder="获得奖杯" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="球员位置" prop="qiuyuanTypes">
                        <el-select v-model="ruleForm.qiuyuanTypes" :disabled="ro.qiuyuanTypes" placeholder="请选择球员位置">
                            <el-option
                                v-for="(item,index) in qiuyuanTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球员位置" prop="qiuyuanValue">
                        <el-input v-model="ruleForm.qiuyuanValue"
                            placeholder="球员位置" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            <input id="qiuduiId" name="qiuduiId" type="hidden">
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.qiuyuanContent"  label="球员详情" prop="qiuyuanContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.qiuyuanContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.qiuyuanContent" label="球员详情" prop="qiuyuanContent">
                            <span v-html="ruleForm.qiuyuanContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                qiuduiForm: {},
                ro:{
                    qiuyuanName: false,
                    qiuyuanPhoto: false,
                    sexTypes: false,
                    qiuyuanShengao: false,
                    qiuyuanTizhong: false,
                    qiuyuanAge: false,
                    qiuyuanJinqiushu: false,
                    qiuyuanZhugong: false,
                    qiuyuanJiangbei: false,
                    qiuyuanTypes: false,
                    qiuduiId: false,
                    qiuyuanContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    qiuyuanName: '',
                    qiuyuanPhoto: '',
                    sexTypes: '',
                    qiuyuanShengao: '',
                    qiuyuanTizhong: '',
                    qiuyuanAge: '',
                    qiuyuanJinqiushu: '',
                    qiuyuanZhugong: '',
                    qiuyuanJiangbei: '',
                    qiuyuanTypes: '',
                    qiuduiId: '',
                    qiuyuanContent: '',
                    insertTime: '',
                },
                sexTypesOptions : [],
                qiuyuanTypesOptions : [],
                qiuduiOptions : [],
                rules: {
                   qiuyuanName: [
                              { required: true, message: '球员姓名不能为空', trigger: 'blur' },
                          ],
                   qiuyuanPhoto: [
                              { required: true, message: '头像不能为空', trigger: 'blur' },
                          ],
                   sexTypes: [
                              { required: true, message: '性别不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanShengao: [
                              { required: true, message: '身高不能为空', trigger: 'blur' },
                          ],
                   qiuyuanTizhong: [
                              { required: true, message: '体重不能为空', trigger: 'blur' },
                          ],
                   qiuyuanAge: [
                              { required: true, message: '年龄不能为空', trigger: 'blur' },
                          ],
                   qiuyuanJinqiushu: [
                              { required: true, message: '进球数不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanZhugong: [
                              { required: true, message: '助攻数不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanJiangbei: [
                              { required: true, message: '获得奖杯不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanTypes: [
                              { required: true, message: '球员位置不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuduiId: [
                              { required: true, message: '所属球队不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanContent: [
                              { required: true, message: '球员详情不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '添加时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.sexTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=qiuyuan_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.qiuyuanTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `qiudui/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.qiuduiOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            qiuduiChange(id){
                this.$http({
                    url: `qiudui/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.qiuduiForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `qiuyuan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.qiuduiChange(data.data.qiuduiId)
                        _this.ruleForm.qiuyuanContent = _this.ruleForm.qiuyuanContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.qiuyuanContent = this.ruleForm.qiuyuanContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`qiuyuan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.qiuyuanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.qiuyuanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            qiuyuanPhotoUploadChange(fileUrls){
                this.ruleForm.qiuyuanPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

