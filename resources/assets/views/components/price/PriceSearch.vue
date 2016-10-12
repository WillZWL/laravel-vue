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
            <div class="x_content col-md-10 col-md-offset-1 col-sm-12" id="pjax-container">
                <form name="fm" class="form_search form-horizontal form-label-left" onsubmit="return false">

                    <div class="form-group col-sm-6 col-xs-12">
                        <label for="inputProductName" class="col-sm-4 control-label">Product Name:</label>
                        <div class="col-sm-8">
                            <input type="text" name="product_name" id="inputProductName" class="form-control" value="" required="required" pattern="" title="">
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Marketplace ID
                        </label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name="marketplace_id">
                                <option value=""></option>
                                <option v-for="marketplace in marketplaceLists" value="{{marketplace.marketplace_id}}">{{marketplace.marketplace_id}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Merchant</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name="merchant_id">
                                <option value=""></option>
                                <option v-for="merchant in merchantLists" value="{{merchant.merchant_id}}">{{merchant.merchant_id}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Country</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name="country_id">
                                <option value=""></option>
                                <option v-for="country in countryLists" value="{{country.country_id}}">{{country.country_name}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Brand</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name="brand_id">
                                <option></option>
                                <option v-for="brand in brandLists | orderBy 'brand_name'" value="{{brand.brand_id}}">{{brand.brand_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Category</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name="category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Brand Manager</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="select2_single form-control" tabindex="-1" name='brand_manager'>
                                <option value=""></option>
                                <option v-for="brand_manager in brandManagerLists" value="{{brand_manager}}">{{brand_manager}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Sub-Category</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="form-control" tabindex="-1" name="sub_category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Listing Status</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="form-control" tabindex="-1" name='listing_status'>
                                <option value=""></option>
                                <option v-for="listing_status in listingStatusLists" value="{{listing_status}}">{{listing_status}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Sub-Sub-Category</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="form-control" tabindex="-1" name="sub_sub_category_id">
                                <option></option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Sourcing Status</label>
                        <div class="col-md-8 col-xs-12">
                            <select class="form-control" tabindex="-1" name='sourcingStatusLists'>
                                <option value=""></option>
                                <option v-for="(index,sourcing_status) in sourcingStatusLists" value="{{index}}">{{sourcing_status}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Surplus</label>
                        <div class="col-md-8 col-xs-12">
                            <div class="input-group">
                                <input type="number" name="from_surplus" class="form-control col-xs-6" placeholder="min qty">
                                <div class="input-group-addon">-</div>
                                <input type="number" name="end_surplus" class="form-control col-xs-6" placeholder="max qty">
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">Inventory</label>
                        <div class="col-md-2 col-xs-12">
                            <select class="form-control" tabindex="-1" name='inventory[warehouse_id]'>
                                <option value=""></option>
                                <option v-for="warehouse in warehouseLists" value="{{warehouse}}">{{warehouse}}</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="input-group">
                                <input type="number" name="inventory[from_inventory]" class="form-control col-xs-6" placeholder="min qty">
                                <div class="input-group-addon">-</div>
                                <input type="number" name="inventory[end_inventory]" class="form-control col-xs-6" placeholder="max qty">
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-sm-6 col-xs-12">
                        <label class="control-label col-md-4">SKU List
                        <ul class="nav nav-tabs tabs-left">
                            <li class="active"><a href="#master_sku" data-toggle="tab">ESG Master SKU</a></li>
                            <li><a href="#esg_sku" data-toggle="tab">ESG SKU</a></li>
                        </ul>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="tab-content">
                                <div class="tab-pane active" id="master_sku">
                                    <textarea name="master_sku_list" class="form-control" style="height:140px;" placeholder="Please Input ESG Master SKU"></textarea>
                                </div>
                                <div class="tab-pane" id="esg_sku">
                                    <textarea name="esg_sku_list" class="form-control" style="height:140px;" placeholder="Please Input ESG SKU"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
                            <!-- <input type="button" class="btn btn-dark" name='reset' value="Reset"> -->
                            <input type="button" class="btn btn-success" name="search" value="Search" @click="submitForm()">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {api_url} from '../../../js/vue.config.js';
import {
        fetchBrandLists,
        fetchMarketplaceLists,
        fetchMerchantLists,
        fetchCountryLists,
        priceOverviewSearch,
        } from '../../../vuex/actions';
import {
        getBrandLists,
        getBrandManagerLists,
        getMarketplaceLists,
        getMerchantLists,
        getCountryLists,
        getListingStatusLists,
        getSourcingStatusLists,
        getWarehouseLists,
        getPriceOverviewLists,
        getPriceOverviewMeta,
        } from '../../../vuex/getters';

export default {
    vuex: {
        actions: {
            fetchBrandLists,
            fetchMarketplaceLists,
            fetchMerchantLists,
            fetchCountryLists,
            submitForm: priceOverviewSearch,
        },
        getters: {
           brandLists: getBrandLists,
           brandManagerLists: getBrandManagerLists,
           marketplaceLists: getMarketplaceLists,
           merchantLists: getMerchantLists,
           countryLists: getCountryLists,
           listingStatusLists: getListingStatusLists,
           sourcingStatusLists: getSourcingStatusLists,
           warehouseLists: getWarehouseLists,
        }
    },
    ready() {
        this.fetchMarketplaceLists(),
        this.fetchBrandLists(),
        this.fetchMerchantLists(),
        this.fetchCountryLists(),
        this.initSearchForm();
        if (url('query')) {
            this.submitForm(url('query'))
        }
    },
    data() {
        return {
            cat_list: {},
            api_url:api_url,
        }
    },
    methods: {
        initSearchForm() {
            var cat_list =
                {'0': {'775':'Home & Office', '776':'XYZ Recategorisation', '780':'Cards, Books & Stationery', '784':'More Category', '798':'Electronics', '814':'Health & Beauty', '820':'Automotive/ Motorcycle', '826':'Travel & Luggage', '830':'Sports & Outdoors', '836':'Toys, Kids & Babies', '844':' Appliances', '852':'Stationeries', '912':'Complementary Accessories', '736':'Electricals', '738':'Crafts, Gadgets & Toys', '753':'Fashion', '758':'Pet Supplies'}, '736': {'787':'Home Automation', '791':'Action Cams', '794':'Digital Cameras', '795':'Lenses', '796':'Watches', '797':'Digital Cameras', '742':'Computing & Phones', '745':'Sound & Vision', '748':'Small Appliances'}, '738': {'781':'Plush Toys', '790':'Gadgets', '917':'Sextoys', '918':'Artwork', '929':'3D Printing Inks', '741':'3D Printing', '749':'3D Printing Plastics', '752':'3D Printing Accessories'}, '741': {'930':'PrintingPen'}, '742': {'923':'Softwares', '743':'Computer & Tablet Accessories', '744':'Telephones'}, '745': {'786':'Accessories', '746':'Headphones and Earphones', '747':'Speakers'}, '749': {'750':'ABS Plastic', '751':'PLA Plastic'}, '753': {'779':'Bags & Accessories', '782':'Unisex', '792':'Jewelry', '808':'Bags', '809':'Shoes', '810':'Jewellery &  Accessories ', '811':'Clothings', '812':'Watches', '813':'Sunglasses', '928':'Perfume', '754':'Women', '756':'Men', '761':'Baby & Child'}, '754': {'755':'T-Shirts'}, '756': {'757':'T-Shirts'}, '758': {'919':'Birds', '926':'Fish & Aquatic Pets', '927':'Other Animals', '759':'Cats', '760':'Dogs'}, '759': {'763':'Cat Accessories', '764':'Cat Scratchers', '765':'Cat Toys', '766':'Collars, Harnesses & Leashes'}, '760': {'768':'Bowls', '769':'Carriers, Crates & Kennels', '770':'Coats & Clothing', '771':'Collars, Harnesses & Leashes', '772':'Dog Toys', '773':'Food Accessories', '774':'Grooming', '767':'Beds & Bedding'}, '761': {'878':'Baby & Child'}, '775': {'788':'Kitchen', '924':'Home Decoration', '925':'Garden Decoration'}, '776': {'777':'XYZ Sub-Categorization'}, '777': {'778':'XYZ Sub-Sub-Categorization'}, '779': {'880':'Bags & Accessories'}, '780': {'783':'Cards, Books & Stationary', '793':'Prints', '916':'Others', '762':'Calendars'}, '784': {'785':'Refund Deductibles'}, '788': {'789':'Cutlery'}, '798': {'799':'Digital Cameras', '800':'Lenses', '801':'Digital Camcorders', '802':'Tablets', '803':'Computing & Gaming', '804':'Apple', '805':'Mobile Phones', '806':'Audio & Visual', '807':'Headphones'}, '799': {'861':'Digital Cameras', '915':'Instant Camera', '920':'Camera accessories'}, '800': {'863':'Lenses'}, '801': {'860':'Digital Camcorders'}, '802': {'865':'Tablets', '914':'Tablets Accessories', '922':'Do not use'}, '803': {'859':'Computing & Gaming'}, '804': {'857':'Apple'}, '805': {'864':'Mobile Phones', '921':'Mobile Phones Accessories'}, '806': {'858':'Audio & Visual'}, '807': {'862':'Headphones'}, '808': {'879':'Bags'}, '809': {'883':'Shoes'}, '810': {'882':'Jewellery &  Accessories '}, '811': {'881':'Clothings'}, '812': {'885':'Watches'}, '813': {'884':'Sunglasses'}, '814': {'815':'Makeup', '816':'Skin Care', '817':'Bath, Body & Hair Care', '818':'Nails', '819':'Others'}, '815': {'887':'Makeup'}, '816': {'890':'Skin Care'}, '817': {'886':'Bath, Body & Hair Care'}, '818': {'888':'Nails'}, '819': {'889':'Others'}, '820': {'821':'Car Care', '822':'Tools & Equipment', '823':'Performance Parts & Accessories', '824':'Wheels & Tires', '825':'Others'}, '821': {'873':'Car Care'}, '822': {'876':'Tools & Equipment'}, '823': {'875':'Performance Parts & Accessories'}, '824': {'877':'Wheels & Tires'}, '825': {'874':'Others'}, '826': {'827':'Bags & Backpacks', '828':'Luggage', '829':'Travel & Luggage'}, '827': {'909':'Bags & Backpacks'}, '828': {'910':'Luggage'}, '829': {'911':'Travel & Luggage'}, '830': {'831':'Shoes & Clothing', '832':'Accessories', '833':'Sport Watches & Sunglasses', '834':'Other Sports Equipment', '835':'Helmet & Protection', '891':'Sports & Outdoors'}, '831': {'895':'Shoes & Clothing'}, '832': {'892':'Accessories'}, '833': {'896':'Sport Watches & Sunglasses'}, '834': {'894':'Other Sports Equipment'}, '835': {'893':'Helmet & Protection'}, '836': {'837':'Shoes & Clothing', '838':'Toys', '839':'Bath, Body & Hair Care', '840':'Feeding & Nursing', '841':'Health & Saftey', '842':'Diapers & Potties', '843':'Others'}, '837': {'907':'Shoes & Clothing'}, '838': {'908':'Toys'}, '839': {'902':'Bath, Body & Hair Care'}, '840': {'904':'Feeding & Nursing'}, '841': {'905':'Health & Saftey'}, '842': {'903':'Diapers & Potties'}, '843': {'906':'Others'}, '844': {'845':'Health Care Equipment ', '846':'Home Appliances ', '847':'Kitchen Appliances ', '848':'Home Decoration', '849':'Kitchen Utensils & Cookware ', '850':'Small Appliances ', '851':'Others'}, '845': {'866':'Health Care Equipment '}, '846': {'867':'Home Appliances '}, '847': {'869':'Kitchen Appliances'}, '848': {'868':'Home Decoration'}, '849': {'870':'Kitchen Utensils & Cookware'}, '850': {'872':'Small Appliances '}, '851': {'871':'Others'}, '852': {'853':'Books ', '854':'Stationeries', '855':'Printing', '856':'Fine Pens'}, '853': {'898':'Books '}, '854': {'901':'Stationeries'}, '855': {'900':'Printing', '931':'PrintingPen'}, '856': {'899':'Fine Pens'}, '891': {'897':'Sports & Outdoors'}, '912': {'913':'Adapters'}};

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

            ChangeCat('0', document.fm.category_id);

            $("select[name='category_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_category_id, this.form.sub_sub_category_id)
            });

            $("select[name='sub_category_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_sub_category_id)
            });

            $(".select2_single").select2({
                placeholder: "",
                allowClear: true
            });
        },
    }
}
</script>