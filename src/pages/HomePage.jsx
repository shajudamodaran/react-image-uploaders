import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>

        <ul>
            <li>
                <Link to={"/image-editor1"}>Image editor 1</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default HomePage