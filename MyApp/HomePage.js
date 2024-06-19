import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, FlatList } from 'react-native';

const jobData = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', icon: require('./assets/Vector.png') },
    { id: '2', title: 'Data Analyst', company: 'Google', icon: require('./assets/googleicon.png') },
    { id: '3', title: 'Scrum Master', company: 'Morgan Stanley', icon: require('./assets/appleicon.png') },
    { id: '4', title: 'Product Manager', company: 'Amazon', icon: require('./assets/amazon.png') },
    { id: '5', title: 'UX Designer', company: 'Twitter', icon: require('./assets/twitter.png') },
    { id: '6', title: 'Cybersecurity Specialist', company: 'snapchat', icon: require('./assets/download.png') },
    { id: '7', title: 'Data Scientist', company: 'IBM', icon: require('./assets/IBM.png') },
    { id: '8', title: 'DevOps Engineer', company: 'Netflix', icon: require('./assets/netflix.png') }
];

const HomePage = ({ route }) => {
    const { name, email } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title1}>{name}</Text>
                        <Text style={styles.subtitle}>{email}</Text>
                    </View>
                    <Image source={require('./assets/profileimage.png')} style={styles.imagehome} />
                </View>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.searchBox}
                        placeholder="🔍Search a job or position"
                    />
                    <Image source={require('./assets/filter.5.png')} style={styles.searchImage} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.sectionTitle}>Featured Jobs</Text>
                    <Text style={{ alignContent: 'center', color: 'gray', marginTop: 50 }}>See all</Text>
                </View>
                <FlatList
                    data={jobData}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.categoryItem}>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <View style={{ backgroundColor: 'white', borderRadius: 20, height: 50, width: 50 }}>
                                    <Image source={item.icon} style={styles.icon} />
                                </View>
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={{ color: 'white' }}>{item.company}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'white',marginTop:85,}}>$180,00</Text>
                                <Text style={{ color: 'white',marginTop:85, }}> Accra,Ghana</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.sectionTitle}>Popular Jobs</Text>
                    <Text style={{ alignContent: 'center', color: 'gray', marginTop: 50 }}>See all</Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Image source={require('./assets/burger-king-4 1.png')} style={{ padding: 10 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold' }}>Jr Executive</Text>
                            <Text style={{ marginTop: 5 }}>Burger King</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold' }}>$96,000/y</Text>
                        <Text style={{ marginTop: 5 }}>Los Angeles, US</Text>
                    </View>
                </View>
                <View style={styles.cardContainer1}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Image source={require('./assets/image 8.png')} style={{ padding: 10 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold' }}>Product Manager</Text>
                            <Text style={{ marginTop: 5 }}>Beats</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold' }}>$84,000/y</Text>
                        <Text style={{ marginTop: 5 }}> Florida, US</Text>
                    </View>
                </View>

                <View style={styles.cardContainer1}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Image source={require('./assets/facebookicon.png')} style={{ padding: 10 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold' }}>Product Manager</Text>
                            <Text style={{ marginTop: 5 }}>facebook</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold' }}>$84,000/y</Text>
                        <Text style={{ marginTop: 5 }}> Florida, US</Text>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop:40,
        flex: 1,
        padding: 16,
    },
    scrollContainer: {
        paddingBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    imagehome: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    searchBox: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
        marginRight: 8,
        marginTop:35,
    },
    searchImage: {
      marginTop:30,
        width: 24,
        height: 24,
    },
    sectionTitle: {
      marginTop:40,
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    categoryItem: {
        backgroundColor: '#04284A',
        padding: 16,
        borderRadius: 24,
        marginRight: 8,
        height:188,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop:10,
        marginLeft:8,
    },
    cardContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    cardContainer1: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
    },
    title: {
      fontWeight:'400',
      color: 'white',
  },
});

export default HomePage;
