<template>						
	<div id="commonDiv" class="x_panel">
		<div class="x_title">
			<h2>Common Info</h2>
			<div class="clearfix"></div>
		</div>
		<div class="x_content">
			<form class="form-horizontal form-label-left" data-parsley-validate="" id="commonForm" name="commonForm" novalidate="">
				<div class="form-group">
					<label for="productDescription" class="control-label col-md-3 col-sm-3 col-xs-12">Product Description <span class="required">*</span>
					</label>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<textarea class="form-control col-md-7 col-xs-12" required="required" name="productDescription" id="productDescription">
						</textarea>
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
