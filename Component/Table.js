import React, { Component } from 'react'
import { Text, View, Image, FlatList, Dimensions, StatusBar } from 'react-native';

export class Table extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        data: [{ key: 1, title: "Course", text: "Pateint/pat1", text2: "Practitioner/1 hellow world how are you?", text3: "Organization/3", StatementTotal: "Statement Period Total" }, { key: 2, title: "ABS" }, { key: 3, title: "Q1", number: "1.6", number2: "9.2", dots: "...", dots2: "...", }, { key: 4, title: "Q2", number: "2000" }, { key: 5, title: "Q3" }, { key: 6, title: "Q4" }, { key: 7, title: "Q5", number: "23000" }, { key: 8, title: "Q6" }, { key: 9, title: "Q7" }, { key: 10, title: "CoPay", text: "N/A", dots: "...", total: "20.1" }],
    }

    renderData = ({ item }) => {
        var { width, height } = Dimensions.get('window')
        return (
            <View key={`${item.key}`}>
                {item.key === 1 ?
                    // Course Coloumn

                    <View>
                        <View style={{ minWidth: width * 0.5, maxWidth: width * 0.7, height: 40, marginLeft: 1, marginRight: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#02c8eb' }}>
                            <Text style={{ fontSize: 16, color: "#fff" }}>{item.title}</Text>
                        </View>

                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text}</Text>
                        </View>

                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text2}</Text>
                        </View>

                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text3}</Text>
                        </View>

                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text3}</Text> */}
                        </View>

                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text3}</Text> */}
                        </View>
                        <View style={{ width: width * 0.5, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", textAlign: "center", backgroundColor: '#94d4ff' }}>{item.StatementTotal}</Text>
                        </View>
                    </View>
                    :
                    item.key === 3 ?
                        // Q1 Coloumn

                        <View style={{ marginLeft: 1, marginRight: 1 }}>
                            <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: '#02c8eb' }}>
                                <Text style={{ fontSize: 16, color: "#fff" }}>{item.title}</Text>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: "green" }}>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, justifyContent: "center", backgroundColor: "#fff0d1" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.number}</Text>
                                </View>

                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, maxWidth: width * 1, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff0d1" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", padding: 10, textAlign: "center" }}>{item.number2}</Text>
                                </View>

                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, marginTop: 1, height: 40, justifyContent: "center", backgroundColor: "#fff0d1" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.dots}</Text>
                                </View>

                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff0d1" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.dots2}</Text>
                                </View>

                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff0d1" }}>
                                    {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text2}</Text> */}
                                </View>
                            </View>

                            <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, justifyContent: "center", backgroundColor: "#fff", borderWidth: 1, borderColor: "gray" }}>
                                <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text2}</Text>
                            </View>
                        </View>
                        :
                        item.key === 10 ?
                            // CoPay Coloumn
                            <View>
                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#02c8eb' }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }}>{item.title}</Text>
                                </View>

                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{item.text}</Text>
                                </View>

                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                                    {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text2}</Text> */}
                                </View>

                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.dots}</Text>
                                </View>

                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                                    {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text3}</Text> */}
                                </View>

                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                                    {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.text3}</Text> */}
                                </View>
                                <View style={{ width: width * 0.3, height: 40, marginLeft: 1, marginTop: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderWidth: 1, borderColor: "gray" }}>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 10 }}>{item.total}</Text>
                                </View>
                            </View>
                            :
                            // Other Coloumns
                            <View style={{marginLeft: 1, marginRight: 1 }}>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, justifyContent: "center", alignItems: 'center', backgroundColor: "#02c8eb" }}>
                                    <Text style={{ fontSize: 16, color: "#fff" }}>{item.title}</Text>
                                </View>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.number}</Text>
                                </View>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.total}</Text>
                                </View>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.dots}</Text>
                                </View>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.dots2}</Text>
                                </View>
                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" }}>
                                </View>

                                <View style={{ minWidth: width * 0.1, maxWidth: width * 0.2, height: 40, marginTop: 1, justifyContent: "center", backgroundColor: "#fff" , borderWidth: 1, borderColor: "gray"}}>
                                </View>
                            </View>
                }
            </View>
        )
    }


    render() {
        var { width, height } = Dimensions.get('window')
        return (
            <View style={{ flex: 1, backgroundColor: "#ebfcff" }}>
                <View style={{ width: '100%', height: 65, backgroundColor: '#d9faee' }}>
                    <View style={{ width: '95%', height: 40, alignSelf: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: 'bold' }}>Explanation Of Benefits</Text>
                        <View style={{width: 35, height: 65, alignItems: "flex-end", justifyContent: "center"}}>

                        <Image source={require("../assets/swipe.png")} style={{ width: 25, height: 25, marginTop: 10 }} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <View>
                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", height: 40, backgroundColor: '#02c8eb' }}>
                            <Text style={{ fontSize: 16, color: "#fff" }}>Per</Text>
                        </View>

                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", height: 40, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold" }}>1(A-B)</Text>
                        </View>

                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", marginTop: 1, height: 40, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>2(A-B)</Text>
                        </View>

                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", marginTop: 1, height: 40, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>3(A-B)</Text>
                        </View>

                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", marginTop: 1, height: 40, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>4(A-B)</Text>
                        </View>
                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", marginTop: 1, height: 40, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>5(A-B)</Text>
                        </View>
                        <View style={{ width: width * 0.2, alignItems: "center", justifyContent: "center", marginTop: 1, height: 40, backgroundColor: '#fff' }}>
                        </View>
                    </View>

                    <FlatList data={this.state.data} renderItem={this.renderData} horizontal={true} showsHorizontalScrollIndicator={false} />
                </View>
                <View>
                </View>

                {/* <FlatList data={this.state.total} renderItem={this.renderTotal} horizontal={true} showsHorizontalScrollIndicator={false} /> */}

                <StatusBar backgroundColor="#008ba3" />
            </View>
        )
    }
}

export default Table;