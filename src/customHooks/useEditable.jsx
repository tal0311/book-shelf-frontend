import React, { useState, useEffect } from 'react'

const useEditable = (el, isEditable, handleBluer) => {
 el.contentEditable = isEditable
 el.suppressContentEditableWarning = true
 el.addEventListener('blur', handleBluer)
}

export default useEditable