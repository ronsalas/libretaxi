import Response from './response';
import { mix } from 'mixwith';
import checkNotNull from '../validations/check-not-null';

/**
 * Submit order response. Used to submit passenger's order.
 * See constructor arguments for more details.
 *
 * @author Roman Pushkin (roman.pushkin@gmail.com)
 * @extends {Response}
 * @date 2016-08-13
 * @version 1.1
 * @since 0.1.0
 */
export default class SubmitOrderResponse extends
  mix(Response).with(checkNotNull(['passengerKey', 'passengerLocation', 'passengerDestination', 'createdAt'])) { // eslint-disable-line max-len
  /**
   * Constructor.
   *
   * @param {string} order.passengerKey - passenger user key, for example: `cli_1`
   * @param {Array} order.passengerLocation - passenger location,
   * for example: `[37.421955, -122.084058]`
   * @param {string} order.passengerDestination - passenger destination
   * @param {object} order.createdAt - timestamp of when order has been created
   * (time since the Unix epoch, in milliseconds)
   * @see https://www.firebase.com/docs/web/api/servervalue/timestamp.html
   * @example
   * r = new SubmitOrderResponse({
   *   passengerKey: 'cli_1',
   *   passengerLocation: [37.421955, -122.084058],
   *   passengerDestination: 'South San Francisco BART station',
   *   createdAt: Firebase.database.ServerValue.TIMESTAMP,
   * });
   */
  constructor(order) {
    const opts = Object.assign({ type: 'submit-order' }, order);
    super(opts);
    Object.assign(this, { type: 'submit-order', order });
  }
}