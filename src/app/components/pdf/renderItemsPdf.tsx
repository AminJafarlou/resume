import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

export interface Item {
  title: string
  subItems?: Item[]
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    marginBottom: 4,
  },
  titleLevel0: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#111827',
    marginBottom: 8
  },
  titleLevelN: {
    fontSize: 10,
    color: '#374151',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemText: {
    flex: 1,
  },
})

export const renderItemsPDF = (items: Item[], level: number = 0): React.ReactNode => {
  return items.map((item, index) => (
    <View key={index} style={styles.container}>
      <View style={styles.itemRow}>
        <Text style={level === 0 ? styles.titleLevel0 : styles.titleLevelN}>{`• ${item.title}`}</Text>
      </View>

      {item.subItems && renderItemsPDF(item.subItems, level + 1)}
    </View>
  ))
}
