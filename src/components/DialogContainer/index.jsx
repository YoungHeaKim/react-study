import React from 'react';
// import styles from './stylesheet.scss';
// import { classes } from '/common/util';
// import { Button } from '/components/index';
// import { connect } from 'react-redux';
// import { actions as dialogActions } from '/reducers/dialog';
//
// @connect(
//   ({ dialog }) => ({ dialog }),
//   {
//     ...dialogActions,
//   },
// )
class DialogContainer extends React.Component {
  // render() {
//     const { className } = this.props;
//     const { dialogs } = this.props.dialog;
//
//     return (
//       <div className={classes(styles.dialogContainer, className)}>
//         {
//           dialogs.map(dialog => dialog && (
//             <div className={styles.overlay} key={dialog.key}>
//               {
//                 dialog.type === 'default' ? (
//                   <div className={classes(styles.dialog, dialog.attention && styles.attention)}>
//                     <div className={styles.message}>
//                       <span>{dialog.message}</span>
//                     </div>
//                     <div className={styles.buttonContainer}>
//                       {
//                         dialog.buttons.map(({ label, ...buttonProps }, i) => (
//                           <div className={styles.dismiss} onClick={() => this.props.dismissDialog(dialog.key)} key={i}>
//                             <Button className={styles.button} {...buttonProps}>
//                               {label}
//                             </Button>
//                           </div>
//                         ))
//                       }
//                     </div>
//                   </div>
//                 ) : (
//                   <dialog.Component dismiss={() => this.props.dismissDialog(dialog.key)}/>
//                 )
//               }
//             </div>
//           ))
//         }
//       </div>
//     );
//   }
}
export default DialogContainer;
