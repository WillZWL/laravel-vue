<template>						
	<div id="basicInfoDiv" class="x_panel">
		<div class="x_title">
			<h2>Basic Product Information</h2>
			<div class="clearfix"></div>
		</div>
		<div class="x_content">
			<form class="form-horizontal form-label-left" data-parsley-validate="" id="basicInfoForm" name="basicInfoForm" novalidate="">
				<div class="form-group">
					<label for="productName" class="control-label col-md-3 col-sm-3 col-xs-12">Product name <span class="required">*</span>
					</label>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<input type="text" class="form-control col-md-7 col-xs-12" required="required" id="productName">
					</div>
				</div>
				<div class="form-group">
					<label for="merchantSku" class="control-label col-md-3 col-sm-3 col-xs-12">Merchant SKU <span class="required">*</span>
					</label>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<input type="text" class="form-control col-md-7 col-xs-12" required="required" name="merchantSku" id="merchantSku">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-md-3 col-sm-3 col-xs-12" for="brandId">Brand <span class="required">*</span></label>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<select name="brandId" id="brandId" class="form-control">
						</select>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-md-3 col-sm-3 col-xs-12" for="supplier">Supplier <span class="required">*</span></label>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<select name="supplier" id="supplier" class="form-control">
						</select>
					</div>
				</div>
				<div class="ln_solid"></div>
				<div class="form-group">
					<div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
						<button class="btn btn-primary" type="submit">Cancel</button>
						<button class="btn btn-success" type="submit">Submit</button>
					</div>
				</div>

			</form>
		</div>
	</div>
</template>


<script>
var brandList = {'108':'Lenovo','217':'Harman Kardon','310':'iTech','311':'ClearOne','314':'RTX','577':'Zopo','596':'Leap Motion','627':'Biloop','630':'Blue Microphones','643':'AYL','648':'3Doodler','650':'AAF x Stella McCartney','651':'AAF Animals Asia','652':'Made4Pets','653':'Devotec','654':'loudjam','655':'Ring','656':'ButterUp','657':'Rapide 3D','658':'SleepACE','659':'Little Green Mouse','660':'Ghostdrone','661':'ParaShoot','662':'Jo Test Brand','663':'SKIVA','664':'Luminox','665':'Seiko','666':'Zeuse','667':'Catalyst Lifestyle','668':'Case Scenario','669':'BodyAwakening','670':'EMIE','671':'FashionComm','672':'Golf','673':'Pantone','674':'Atongm','675':'AVI-8','676':'Solartime','677':'Cycliq','678':'Marc Jacobs','679':'Michael Kors','680':'Zero','681':'Nevo','682':'Looking Glass','683':'Bluedio','684':'Sugr','685':'Diesel','686':'Dame Products','687':'3Glasses','688':'Zig','689':'GlobalSources','690':'DaoTian','691':'Bookniture','692':'Sandbucket','694':'Jolla Asia LTD.','695':'AMITIDY','696':'KONNEXT','697':'VTECH','698':'PowerDot','699':'Bluesmart','700':'Syabas','701':'New Matter','702':'Quitbit','703':'The Bamboo Barn','704':'Ceed Ltd.','706':'ESG','707':'Z-Camera','708':'Lumio','709':'DFrobot','710':'EzeeCube','711':'Noitom','712':'TLF','713':'Telecom Lifestyle Fashion','714':'RiCi','715':'Palettegear','716':'Future of Play','717':'MEITU','718':'hereO','719':'Vector','720':'OontZ','721':'Linjer','722':'ShopifyBrand','723':'MagentoBrand','724':'OMIMO','725':'FUTURE MAKE ','726':'Future Former','727':'Aiwatch','728':'Zuk','729':'Multi CAV','730':'4PX','731':'Sounder','732':'EasyBBQ','733':'XuanWheel','734':'Sustyle','735':'Huadoo','736':'AmTidy','737':'XGIMI','738':'ALOMA','739':'Upair','740':'Autobot','741':'Fgoola','742':'Boboo','743':'RunCam','744':'LUMO','745':'CamFi','746':'Exptest','747':'Nubia','748':'G10','749':'Z-Ben','750':'Redpepper','751':'Bolt Power','752':'TopWatch','753':'Coollang','754':'Czur','755':'Dlodlo','756':'Fisher Price','757':'Barbie','758':'Mega bloks','759':'Mattel','760':'palette','761':'Keekoon','762':'Amkov','763':'MINIX','764':'Tronsmart','765':'wowstick','766':'Zidoo','767':'Vwalker','768':'Reke','769':'Aimo','770':'SenseON','771':'Yiban','772':'KXL','773':'Emish','774':'Hugsby','775':'Echoman','776':'Patpet','777':'Fortune Dragon','778':'FH-801','779':'FTL','780':'kinder','781':'Eyemore','782':'uPlane','783':'CardioCycle','784':'VIBOTON','785':'Danmini','786':'LESI','787':'VSTARCAM⇥','788':'SolarCharger','789':'QIVV','790':'SONIDA','791':'Qlippie','792':'VeePai','793':'AIMOMETER','794':'ABLY','795':'Visiontek','796':'ZoneCharge','797':'scarletto','798':'Ausek','799':'Blackphone','800':'Soundbrenner'};
function PutSelectorContent(selector, list)
{
    for (var i in list) {
        selector.options[selector.options.length] = new Option(list[i], i);
    }
}
export default {
	ready() {
		$("body").scrollspy({target: '#myScrollspy', offset: 30});
		PutSelectorContent(document.basicInfoForm.brandId, brandList);
	}
}
</script>