import { IconButton, Tooltip } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
/**
 *@function EditButton.jsx
 *@author Azim
 *
 **/

const RIconButton = (props) => {
  const {
    title,
    placement,
    style,
    onClick,
    children,
    className,
    color,
    size,
    edge,
  } = props;
  return (
    <Tooltip
      title={title ? title : ""}
      arrow
      placement={placement ? placement : "right"}
    >
      <IconButton
        className={className}
        style={style}
        onClick={onClick}
        aria-label="Edit"
        color={color}
        // title={title}
        edge={!edge ? "" : "end"}
        aria-describedby={props.id}
        size={size}
      >
        {children ? children : <EditIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default RIconButton;
