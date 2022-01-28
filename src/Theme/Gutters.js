/**
 * This file contains metric styles that are global to the application.
 */
import { MetricsSizes } from './Variables';
import { StyleSheet } from 'react-native';

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <op><direction><size>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
export default StyleSheet.create({
  ...Object.entries(MetricsSizes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      /* Margins */
      [`mb${key}`]: {
        marginBottom: value,
      },
      [`mt${key}`]: {
        marginTop: value,
      },
      [`mr${key}`]: {
        marginRight: value,
      },
      [`ml${key}`]: {
        marginLeft: value,
      },
      [`mv${key}`]: {
        marginVertical: value,
      },
      [`mh${key}`]: {
        marginHorizontal: value,
      },
      [`m${key}`]: {
        margin: value,
      },

      // With numarical sizes
      [`mb${value}`]: {
        marginBottom: value,
      },
      [`mt${value}`]: {
        marginTop: value,
      },
      [`mr${value}`]: {
        marginRight: value,
      },
      [`ml${value}`]: {
        marginLeft: value,
      },
      [`mv${value}`]: {
        marginVertical: value,
      },
      [`mh${value}`]: {
        marginHorizontal: value,
      },
      [`m${value}`]: {
        margin: value,
      },

      /* Paddings */
      [`pb${key}`]: {
        paddingBottom: value,
      },
      [`pt${key}`]: {
        paddingTop: value,
      },
      [`pr${key}`]: {
        paddingRight: value,
      },
      [`pl${key}`]: {
        paddingLeft: value,
      },
      [`pv${key}`]: {
        paddingVertical: value,
      },
      [`ph${key}`]: {
        paddingHorizontal: value,
      },
      [`p${key}`]: {
        padding: value,
      },

      // WithNumarical sizes
      [`pb${value}`]: {
        paddingBottom: value,
      },
      [`pt${value}`]: {
        paddingTop: value,
      },
      [`pr${value}`]: {
        paddingRight: value,
      },
      [`pl${value}`]: {
        paddingLeft: value,
      },
      [`pv${value}`]: {
        paddingVertical: value,
      },
      [`ph${value}`]: {
        paddingHorizontal: value,
      },
      [`p${value}`]: {
        padding: value,
      },
    }),
    {},
  ),
});
