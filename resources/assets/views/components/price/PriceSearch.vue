<style>
.isloading-overlay{position:relative;text-align:center;}
.isloading-overlay .isloading-wrapper{background:#FFFFFF;font-size:24px;-webkit-border-radius:7px;-webkit-background-clip:padding-box;-moz-border-radius:7px;-moz-background-clip:padding;border-radius:7px;background-clip:padding-box;display:inline-block;margin:0 auto;padding:10px 20px;top:10%;z-index:9000;}
.form-horizontal .required {color: red;}
</style>
<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Filters <small>[Advanced]</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                    <li>
                        <a class="collapse-link"><i class="fa fa-chevron-down"></i></a>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content" id="pjax-container">
                <form name="fm" class="form_search form-horizontal form-label-left" onsubmit="return false">
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Marketplace ID <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="marketplace_id" required>
                                <option v-for="marketplace in marketplace_list" value="{{marketplace.marketplace_id}}">{{marketplace.marketplace_id}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Merchant</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="merchant_id">
                                <option value=""></option>
                                <option v-for="merchant in merchant_list" value="{{merchant.merchant_id}}">{{merchant.merchant_id}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Country</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="country_id">
                                <option value=""></option>
                                <option v-for="country in country_list" value="{{country.country_id}}">{{country.country_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Brand</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="brand_id">
                                <option></option>
                                <option v-for="brand in brand_list | orderBy 'brand_name'" value="{{brand.brand_id}}">{{brand.brand_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Brand Manager</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='brand_manager'>
                                <option value=""></option>
                                <option v-for="brand_manager in brand_manager_list" value="{{brand_manager}}">{{brand_manager}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sub-Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="sub_category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Listing Status</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='sku_status'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sub-Sub-Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="sub_sub_category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sourcing Status</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='sourcing_status'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Inventory</label>
                        <div class="col-md-3 col-xs-12">
                            <select class="form-control" name='warehouse_id'>
                                <option value=""></option>
                                <option v-for="warehouse in warehouse_list" value="{{warehouse}}">{{warehouse}}</option>
                            </select>
                        </div>
                        <div class="col-md-3 col-xs-12">
                            <input type="text" name="inventory" class="form-control col-md-4 col-xs-12" placeholder=">,<,= ">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">SKU List
                        <ul class="nav nav-tabs tabs-left">
                            <li class="active"><a href="#master_sku" data-toggle="tab">Master SKU</a></li>
                            <li><a href="#esg_sku" data-toggle="tab">ESG SKU</a></li>
                        </ul>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="tab-content">
                                <div class="tab-pane active" id="master_sku">
                                    <textarea name="master_sku_list" class="form-control" style="height:140px;" placeholder="Please Input Master SKU"></textarea>
                                </div>
                                <div class="tab-pane" id="esg_sku">
                                    <textarea name="esg_sku_list" class="form-control" style="height:140px;" placeholder="Please Input ESG SKU"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
                            <input type="button" class="btn btn-dark" name='reset' value="Reset">
                            <input type="button" class="btn btn-success" name="search" value="Search" @click="submitForm()">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {api_url, access_token} from '../../../js/vue.config.js'
export default {
    ready() {
        this.fetchMarketplace(),
        this.fetchBrand(),
        this.fetchMerchant(),
        this.fetchCountry(),
        this.initSearchForm();
        if (url('query')) {
            this.submitForm(url('query'));
        }
    },
    data() {
        return {
            cat_list: {},
            marketplace_list: {},
            brand_list: {},
            brand_manager_list: {},
            country_list: {},
            merchant_list: {},
            api_url:api_url,
            warehouse_list: [
                    'ETRADE',
                    'ES_HK',
                    'ES_DGME',
                    'CV_AMZ_FBA_UK',
                    'CV_AMZ_FBA_US',
                    'ESG_AMZN_JP_FBA',
                    'ESG_AMZN_UK_FBA',
                    'ESG_AMZN_US_FBA',
                    'PX_AMZN_FBA_UK'],
            access_token:access_token
        }
    },
    methods: {
        initSearchForm() {
            var cat_list =
                {'0': {'775':'Home & Office', '776':'XYZ Recategorisation', '780':'Cards, Books & Stationery', '784':'More Category', '798':'Electronics', '814':'Health & Beauty', '820':'Automotive/ Motorcycle', '826':'Travel & Luggage', '830':'Sports & Outdoors', '836':'Toys, Kids & Babies', '844':' Appliances', '852':'Stationeries', '912':'Complementary Accessories', '736':'Electricals', '738':'Crafts, Gadgets & Toys', '753':'Fashion', '758':'Pet Supplies'}, '736': {'787':'Home Automation', '791':'Action Cams', '794':'Digital Cameras', '795':'Lenses', '796':'Watches', '797':'Digital Cameras', '742':'Computing & Phones', '745':'Sound & Vision', '748':'Small Appliances'}, '738': {'781':'Plush Toys', '790':'Gadgets', '917':'Sextoys', '918':'Artwork', '929':'3D Printing Inks', '741':'3D Printing', '749':'3D Printing Plastics', '752':'3D Printing Accessories'}, '741': {'930':'PrintingPen'}, '742': {'923':'Softwares', '743':'Computer & Tablet Accessories', '744':'Telephones'}, '745': {'786':'Accessories', '746':'Headphones and Earphones', '747':'Speakers'}, '749': {'750':'ABS Plastic', '751':'PLA Plastic'}, '753': {'779':'Bags & Accessories', '782':'Unisex', '792':'Jewelry', '808':'Bags', '809':'Shoes', '810':'Jewellery &  Accessories ', '811':'Clothings', '812':'Watches', '813':'Sunglasses', '928':'Perfume', '754':'Women', '756':'Men', '761':'Baby & Child'}, '754': {'755':'T-Shirts'}, '756': {'757':'T-Shirts'}, '758': {'919':'Birds', '926':'Fish & Aquatic Pets', '927':'Other Animals', '759':'Cats', '760':'Dogs'}, '759': {'763':'Cat Accessories', '764':'Cat Scratchers', '765':'Cat Toys', '766':'Collars, Harnesses & Leashes'}, '760': {'768':'Bowls', '769':'Carriers, Crates & Kennels', '770':'Coats & Clothing', '771':'Collars, Harnesses & Leashes', '772':'Dog Toys', '773':'Food Accessories', '774':'Grooming', '767':'Beds & Bedding'}, '761': {'878':'Baby & Child'}, '775': {'788':'Kitchen', '924':'Home Decoration', '925':'Garden Decoration'}, '776': {'777':'XYZ Sub-Categorization'}, '777': {'778':'XYZ Sub-Sub-Categorization'}, '779': {'880':'Bags & Accessories'}, '780': {'783':'Cards, Books & Stationary', '793':'Prints', '916':'Others', '762':'Calendars'}, '784': {'785':'Refund Deductibles'}, '788': {'789':'Cutlery'}, '798': {'799':'Digital Cameras', '800':'Lenses', '801':'Digital Camcorders', '802':'Tablets', '803':'Computing & Gaming', '804':'Apple', '805':'Mobile Phones', '806':'Audio & Visual', '807':'Headphones'}, '799': {'861':'Digital Cameras', '915':'Instant Camera', '920':'Camera accessories'}, '800': {'863':'Lenses'}, '801': {'860':'Digital Camcorders'}, '802': {'865':'Tablets', '914':'Tablets Accessories', '922':'Do not use'}, '803': {'859':'Computing & Gaming'}, '804': {'857':'Apple'}, '805': {'864':'Mobile Phones', '921':'Mobile Phones Accessories'}, '806': {'858':'Audio & Visual'}, '807': {'862':'Headphones'}, '808': {'879':'Bags'}, '809': {'883':'Shoes'}, '810': {'882':'Jewellery &  Accessories '}, '811': {'881':'Clothings'}, '812': {'885':'Watches'}, '813': {'884':'Sunglasses'}, '814': {'815':'Makeup', '816':'Skin Care', '817':'Bath, Body & Hair Care', '818':'Nails', '819':'Others'}, '815': {'887':'Makeup'}, '816': {'890':'Skin Care'}, '817': {'886':'Bath, Body & Hair Care'}, '818': {'888':'Nails'}, '819': {'889':'Others'}, '820': {'821':'Car Care', '822':'Tools & Equipment', '823':'Performance Parts & Accessories', '824':'Wheels & Tires', '825':'Others'}, '821': {'873':'Car Care'}, '822': {'876':'Tools & Equipment'}, '823': {'875':'Performance Parts & Accessories'}, '824': {'877':'Wheels & Tires'}, '825': {'874':'Others'}, '826': {'827':'Bags & Backpacks', '828':'Luggage', '829':'Travel & Luggage'}, '827': {'909':'Bags & Backpacks'}, '828': {'910':'Luggage'}, '829': {'911':'Travel & Luggage'}, '830': {'831':'Shoes & Clothing', '832':'Accessories', '833':'Sport Watches & Sunglasses', '834':'Other Sports Equipment', '835':'Helmet & Protection', '891':'Sports & Outdoors'}, '831': {'895':'Shoes & Clothing'}, '832': {'892':'Accessories'}, '833': {'896':'Sport Watches & Sunglasses'}, '834': {'894':'Other Sports Equipment'}, '835': {'893':'Helmet & Protection'}, '836': {'837':'Shoes & Clothing', '838':'Toys', '839':'Bath, Body & Hair Care', '840':'Feeding & Nursing', '841':'Health & Saftey', '842':'Diapers & Potties', '843':'Others'}, '837': {'907':'Shoes & Clothing'}, '838': {'908':'Toys'}, '839': {'902':'Bath, Body & Hair Care'}, '840': {'904':'Feeding & Nursing'}, '841': {'905':'Health & Saftey'}, '842': {'903':'Diapers & Potties'}, '843': {'906':'Others'}, '844': {'845':'Health Care Equipment ', '846':'Home Appliances ', '847':'Kitchen Appliances ', '848':'Home Decoration', '849':'Kitchen Utensils & Cookware ', '850':'Small Appliances ', '851':'Others'}, '845': {'866':'Health Care Equipment '}, '846': {'867':'Home Appliances '}, '847': {'869':'Kitchen Appliances'}, '848': {'868':'Home Decoration'}, '849': {'870':'Kitchen Utensils & Cookware'}, '850': {'872':'Small Appliances '}, '851': {'871':'Others'}, '852': {'853':'Books ', '854':'Stationeries', '855':'Printing', '856':'Fine Pens'}, '853': {'898':'Books '}, '854': {'901':'Stationeries'}, '855': {'900':'Printing', '931':'PrintingPen'}, '856': {'899':'Fine Pens'}, '891': {'897':'Sports & Outdoors'}, '912': {'913':'Adapters'}};

            // var sku_type_list = {'0':'Not Accelerator', '1':'Accelerator'};
            var sku_status_list = { '0':'Inactive', '1':'Created', '2':'Listed'};
            var sourcing_status_list = {'A':'Readily Available', 'O':'Temp of Out Stock','C':'Limited Stock','L':'Last Lot','D':'Discontinued'};
            var brand_manager_list= {'Apple':'Apple','Edward':'Edward','Jim':'Jim','Romuald':'Romuald','Shoaib':'Shoaib','Test':'Test','Tomasz':'Tomasz'};

            function ChangeCat(val, obj, obj2)
            {
                obj.length = 1;
                if (obj2) {
                    obj2.length = 1;
                }
                for (var i in cat_list[val]){
                    obj.options[obj.options.length]=new Option(cat_list[val][i], i);
                }
            }

            function PutSelectorContent(selector, list)
            {
                for (var i in list) {
                    selector.options[selector.options.length] = new Option(list[i], i);
                }
            }

            ChangeCat('0', document.fm.category_id);

            $("select[name='category_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_category_id, this.form.sub_sub_category_id)
            });

            $("select[name='sub_category_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_sub_category_id)
            });
            // Put selector content
            // PutSelectorContent(document.fm.sku_type, sku_type_list);
            PutSelectorContent(document.fm.sku_status, sku_status_list);
            PutSelectorContent(document.fm.sourcing_status, sourcing_status_list);
            PutSelectorContent(document.fm.brand_manager, brand_manager_list);

            $("input[name='reset']").on('click', function(){
                $("select").val("");
            });

            $("input[name='inventory']").keydown(function(event){
                if(event.keyCode == 13) {
                    event.preventDefault();
                    return false;
                }
            });
        },
        setSearchFormValue() {
            for (var i = 0; i < $(".form_search select").length; i++) {
                var key = $(".form_search select")[i].name;
                var value = url('?' + key);
                $(".form_search select[name="+key+"]").val(value);
            }
            $(".form_search input[name='inventory']").val(url('?inventory'));
            $(".form_search textarea[name='master_sku_list']").val(url('?master_sku_list'));
            $(".form_search textarea[name='esg_sku_list']").val(url('?esg_sku_list'));
        },
        PutSelectorContent (selector, list) {
            for (var i in list) {
                selector.options[selector.options.length] = new Option(list[i], i);
            }
        },
        fetchMarketplace () {
            this.$http({
                url:this.api_url+'marketplace?access_token='+this.access_token,
                method: 'GET'
            }).then(function (response) {
                this.$set('marketplace_list', response.data.data);
            })
        },
        fetchBrand () {
            this.$http({
                url:this.api_url+'brand?access_token='+this.access_token,
                method: 'GET'
            }).then(function (response) {
                var brand_manager_list = {};
                for (var i = 0;i< response.data.data.length;i++) {
                    if (response.data.data[i].brand_manager != '') {
                        brand_manager_list[response.data.data[i].brand_manager] = response.data.data[i].brand_manager;

                    }
                }
                this.$set('brand_list', response.data.data);
                this.$set('brand_manager_list', brand_manager_list);
            })
        },
        fetchMerchant () {
            this.$http({
                url:this.api_url+'merchant?access_token='+this.access_token,
                method:'GET',
            }).then(function (response) {
                this.$set('merchant_list', response.data.data);
            })
        },
        fetchCountry () {
            this.$http({
                url:this.api_url+'country?access_token='+this.access_token,
                method: 'GET'
            }).then(function (response) {
                this.$set('country_list', response.data.data);
            })
        },
        submitForm(query_str = '') {
            $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
            if (query_str == '') {
                var query_str = $("form[name='fm']").serialize();
            }
            window.history.pushState(null, null, 'price-overview?'+query_str);
            var search_result = {};
            this.$http({
                url:this.api_url+'marketplace-product/search?access_token='+this.access_token+'&'+query_str,
                method: 'GET'
            }).then(function (response) {
                search_result = response.data.data
            }).then(function(){
                this.$dispatch('form-search', search_result);
            }).then(function() {
                this.setSearchFormValue();
            }).then(function(){
                $.isLoading("hide");
            });
        }
    }
}
</script>