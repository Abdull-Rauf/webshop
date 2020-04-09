import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import items from './menuitems.json'
import useStyles from './Styles'
import './style.css'
import { List, ListItem } from '@material-ui/core'

export default function TopMenu() {


  const classes = useStyles();
  return (
    <List className={classes.menu}>
      {items.map(({ label, name, subItems, ...rest }) => (
        <ListItem key={name}  {...rest} className='menuLinks'>
          {label}
          {Array.isArray(subItems) ? (
            <div className='dropdownMenu'>

              {subItems.map((subItem) => (
                <Link to={`/sv-EN/${name}/${subItem.name}`} key={subItem.name} className='dropdownMenuLinks'>

                  {subItem.label}

                </Link>
              ))}

            </div>
          ) : null}
        </ListItem>
      ))}
    </List>
  )
}
