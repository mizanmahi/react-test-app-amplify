/* eslint-disable react/require-default-props */
type PrimaryButtonProps = { action?: string };

function PrimaryButton({ action = 'Add' }: PrimaryButtonProps) {
  return (
    <button type="button">
      Click to {action}
    </button>
  );
}

export default PrimaryButton;
