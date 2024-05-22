const handleSearch = async () => {
    const q = query(collection(db, 'tasks'), where('title', '==', searchTerm));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map(doc => doc.data() as { id: string; title: string; description: string; status: number; author: string; });
    const firstResult = result.length > 0 ? result[0] : null; //resultが空配列でない場合は最初の要素を、空配列の場合はnullを代入
    onSearchResult(firstResult);
  };
  //検索機能実装
  /*この関数は、入力されたsearchTermに一致するtasksコレクションのドキュメントを検索し、最初の結果をonSearchResultプロップスに渡しています。
  検索結果がない場合はnullを渡します。*/