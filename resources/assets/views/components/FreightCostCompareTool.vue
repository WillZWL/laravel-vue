<template>
  <div class="container">
    <section class="search-form">
      <form action="" onsubmit="return false" method="GET" class="form-horizontal" role="form">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputCountry">Country</label>
          <div class="col-sm-8">
            <select v-model="country" name="country" id="inputCountry" class="form-control" required="required">
              <option value="">-- Please Select One --</option>
              <option v-for="country in countries" :value="country.id">
                {{ country.name }}  ({{ country.id }})
              </option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="inputState" class="col-sm-2 control-label">State</label>
          <div class="col-sm-8">
            <select v-model="state" name="state" id="inputState" class="form-control">
              <option value="">-- Please Select One --</option>
              <option v-for="state in states" :value="state.id">{{ state.name }} ({{ state.id }})</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputWeight">Weight</label>
          <div class="col-sm-8">
            <select v-model="weight" name="weight" id="inputWeight" class="form-control" required="required">
              <option value="">-- Please Select One --</option>
              <option v-for="weight in weights" :value="weight.weight">{{ weight.weight }} kg</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="inputDelivery_type" class="col-sm-2 control-label">Delivery Type:</label>
          <div class="col-sm-8">
            <div>
              <select v-model="deliveryType" name="delivery_type" id="inputDelivery_type" class="form-control">
                <option value="">-- Please Select One --</option>
                <option value="FBA">FBA</option>
                <option value="SBN">SBN</option>
                <option value="POSTAGE">STD</option>
                <option value="COURIER_EXP">EXP</option>
                <option value="COURIER">EXPED</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="inputBattery_type" class="col-sm-2 control-label">Battery Type:</label>
          <div class="col-sm-8">
            <select v-model="batteryType" name="battery_type" id="inputBattery_type" class="form-control">
              <option value="">-- Please Select One --</option>
              <option value="0">No Battery</option>
              <option value="1">Built-in</option>
              <option value="2">External</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-2 col-sm-offset-5">
            <button @click="fetchFreightCost()" type="submit" class="btn btn-primary">Search</button>
          </div>
        </div>

      </form>
    </section>

    <section class="warehouse-section">
      <label>Warehouse: </label>
      <button @click="changeWarehouse('ES_HK')" type="button" class="btn btn-default">ES_HK</button>
      <button @click="changeWarehouse('4PXDG_PL')" type="button" class="btn btn-default">4PXDG_PL</button>
      <span style="color: red">*note: Please click the warehouse to highlight the selected courier</span>
    </section>

    <section class="freight-cost">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Shipping Service</th>
            <th>Destination Country</th>
            <th>Destination State</th>
            <th>Warehouse</th>
            <th>Incoterm</th>
            <th>Courier Name</th>
            <th>Freight Cost (HKD)</th>
            <th>Total Cost (including FS) (HKD)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="courier in sortedCouriers" :class="highlightSelectedCourierRow(selectedWarehouse, courier.courierId)">
            <td>{{ courier.type }}</td>
            <td>{{ selectedCountry }}</td>
            <td>{{ selectedState }}</td>
            <td>{{ selectedWarehouse }}</td>
            <td>{{ getIncoterm(courier) }}</td>
            <td>[ID:{{ courier.courierId }}] {{ courier.courierName }}</td>
            <td>{{ courier.freightCost.toFixed(2) }}</td>
            <td>{{ (courier.freightCost * (1 + courier.fuelSurchargeInPercent)).toFixed(2) }}</td>
          </tr>

        </tbody>
      </table>
    </section>
  </div>
</template>

<script>

  import {
    fetchFreightCostList,
    fetchCountryWithStateList,
    fetchWeightList,
    fetchSelectedCouriers,
  } from '../../vuex/actions';

  import {
    getFreightCostList,
    getCountryWithStateList,
    getWeightList,
    getSelectedCouriers,
  } from '../../vuex/getters';


export default {
  name: 'freightCostCompareTool',
  data () {
    return {
      country: '',
      state: '',
      weight: '',
      deliveryType: '',
      batteryType: '',
      selectedCountry: '',
      selectedState: '',
      selectedWarehouse: 'ES_HK'
    }
  },

  ready() {
    this.fetchCountryWithStateList();
    this.fetchWeightList();
  },

  methods: {
    fetchFreightCost: function () {
      this.selectedCountry = this.country;
      this.selectedState = this.state;

      if (this.country && this.weight) {
        this.fetchSelectedCouriers(this.country);
        this.fetchFreightCostList(this.country, this.state, this.weight);
      }
      return false;
    },
    highlightSelectedCourierRow: function (warehouse, courierId) {
      return {
        'danger': this.selectedCouriers[warehouse].includes(courierId)
      }
    },
    changeWarehouse: function (warehouse) {
      this.selectedWarehouse = warehouse;
      this.checkSelectedCourier()
    },
    getIncoterm: function (courier) {
      var incoterm = '';
      if (courier.allowDdp == 1) {
        incoterm =  'DDP' + incoterm
      }

      if (courier.allowDdu == 1) {
        if (incoterm != '') {
          incoterm = incoterm + '/'
        }
        incoterm = incoterm + 'DDU'
      }

      return incoterm;
    },
    checkSelectedCourier: function () {
      var notMatch = true;
      this.selectedCouriers[this.selectedWarehouse].forEach(function (selectedCourierId) {
        this.sortedCouriers.forEach(function (courierObj) {
          if (selectedCourierId == courierObj.courierId) {
            notMatch = false;
          }
        })
      }, this)
      if (notMatch) {
        alert('No match courier!')
      }
    }
  },

  computed: {
    states: function () {
      var states = []
      var selectedCountry = this.country
      this.countries.forEach(function (c) {
        if (c.id === selectedCountry) {
          states = c.states
        }
      })

      return states
    },
    sortedCouriers: function () {
      var sortedCouriers = this.couriers;

      if (this.deliveryType) {
        sortedCouriers = sortedCouriers.filter(function (a) {
          return a.type === this.deliveryType;
        }, this);
      }

      if (this.batteryType !== '') {
          sortedCouriers = sortedCouriers.filter(function (b) {
          if (this.batteryType === '0') {
            return b.allowBuiltInBattery == 0 && b.allowExternalBattery == 0;
          } else if (this.batteryType === '1') {
            return b.allowBuiltInBattery == 1;
          } else if (this.batteryType === '2') {
            return b.allowExternalBattery == 1;
          }
        }, this)
      }

      return sortedCouriers.sort(function (a, b) {
        if (a.type > b.type) {
          return 1
        }
        if (a.type < b.type) {
          return -1
        }
        return 0
      })
    }
  },

  vuex: {
    actions: {
      fetchFreightCostList,
      fetchCountryWithStateList,
      fetchWeightList,
      fetchSelectedCouriers,
    },
    getters: {
      couriers: getFreightCostList,
      countries: getCountryWithStateList,
      weights: getWeightList,
      selectedCouriers: getSelectedCouriers,
    }
  }
}
</script>
